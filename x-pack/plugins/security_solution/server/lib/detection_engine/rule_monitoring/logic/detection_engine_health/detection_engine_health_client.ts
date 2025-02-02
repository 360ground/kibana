/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Logger } from '@kbn/core/server';
import { withSecuritySpan } from '../../../../../utils/with_security_span';
import type { ExtMeta } from '../utils/console_logging';

import type {
  ClusterHealthParameters,
  ClusterHealthSnapshot,
  RuleHealthParameters,
  RuleHealthSnapshot,
  SpaceHealthParameters,
  SpaceHealthSnapshot,
} from '../../../../../../common/detection_engine/rule_monitoring';

import type { IEventLogHealthClient } from './event_log/event_log_health_client';
import type { IRuleObjectsHealthClient } from './rule_objects/rule_objects_health_client';
import type { IDetectionEngineHealthClient } from './detection_engine_health_client_interface';

export const createDetectionEngineHealthClient = (
  ruleObjectsHealthClient: IRuleObjectsHealthClient,
  eventLogHealthClient: IEventLogHealthClient,
  logger: Logger,
  currentSpaceId: string
): IDetectionEngineHealthClient => {
  return {
    calculateRuleHealth: (args: RuleHealthParameters): Promise<RuleHealthSnapshot> => {
      return withSecuritySpan('IDetectionEngineHealthClient.calculateRuleHealth', async () => {
        const ruleId = args.rule_id;
        try {
          // We call these two sequentially, because if the rule doesn't exist we need to throw 404
          // from ruleObjectsHealthClient before we calculate expensive stats in eventLogHealthClient.
          const statsBasedOnRuleObjects = await ruleObjectsHealthClient.calculateRuleHealth(args);
          const statsBasedOnEventLog = await eventLogHealthClient.calculateRuleHealth(args);

          return {
            stats_at_the_moment: statsBasedOnRuleObjects.stats_at_the_moment,
            stats_over_interval: statsBasedOnEventLog.stats_over_interval,
            history_over_interval: statsBasedOnEventLog.history_over_interval,
            debug: {
              ...statsBasedOnRuleObjects.debug,
              ...statsBasedOnEventLog.debug,
            },
          };
        } catch (e) {
          const logMessage = 'Error calculating rule health';
          const logReason = e instanceof Error ? e.message : String(e);
          const logSuffix = `[rule id ${ruleId}]`;
          const logMeta: ExtMeta = {
            rule: { id: ruleId },
          };

          logger.error(`${logMessage}: ${logReason} ${logSuffix}`, logMeta);
          throw e;
        }
      });
    },

    calculateSpaceHealth: (args: SpaceHealthParameters): Promise<SpaceHealthSnapshot> => {
      return withSecuritySpan('IDetectionEngineHealthClient.calculateSpaceHealth', async () => {
        try {
          const [statsBasedOnRuleObjects, statsBasedOnEventLog] = await Promise.all([
            ruleObjectsHealthClient.calculateSpaceHealth(args),
            eventLogHealthClient.calculateSpaceHealth(args),
          ]);

          return {
            stats_at_the_moment: statsBasedOnRuleObjects.stats_at_the_moment,
            stats_over_interval: statsBasedOnEventLog.stats_over_interval,
            history_over_interval: statsBasedOnEventLog.history_over_interval,
            debug: {
              ...statsBasedOnRuleObjects.debug,
              ...statsBasedOnEventLog.debug,
            },
          };
        } catch (e) {
          const logMessage = 'Error calculating space health';
          const logReason = e instanceof Error ? e.message : String(e);
          const logSuffix = `[space id ${currentSpaceId}]`;
          const logMeta: ExtMeta = {
            kibana: { spaceId: currentSpaceId },
          };

          logger.error(`${logMessage}: ${logReason} ${logSuffix}`, logMeta);
          throw e;
        }
      });
    },

    calculateClusterHealth: (args: ClusterHealthParameters): Promise<ClusterHealthSnapshot> => {
      return withSecuritySpan('IDetectionEngineHealthClient.calculateClusterHealth', async () => {
        try {
          const [statsBasedOnRuleObjects, statsBasedOnEventLog] = await Promise.all([
            ruleObjectsHealthClient.calculateClusterHealth(args),
            eventLogHealthClient.calculateClusterHealth(args),
          ]);

          return {
            stats_at_the_moment: statsBasedOnRuleObjects.stats_at_the_moment,
            stats_over_interval: statsBasedOnEventLog.stats_over_interval,
            history_over_interval: statsBasedOnEventLog.history_over_interval,
            debug: {
              ...statsBasedOnRuleObjects.debug,
              ...statsBasedOnEventLog.debug,
            },
          };
        } catch (e) {
          const logMessage = 'Error calculating cluster health';
          const logReason = e instanceof Error ? e.message : String(e);

          logger.error(`${logMessage}: ${logReason}`);
          throw e;
        }
      });
    },
  };
};
