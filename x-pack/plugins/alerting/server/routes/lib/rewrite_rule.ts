/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { omit } from 'lodash';

import { RuleTypeParams, SanitizedRule, RuleLastRun } from '../../types';

export const rewriteRuleLastRun = (lastRun: RuleLastRun) => {
  const { outcomeMsg, outcomeOrder, alertsCount, ...rest } = lastRun;
  return {
    alerts_count: alertsCount,
    outcome_msg: outcomeMsg,
    outcome_order: outcomeOrder,
    ...rest,
  };
};

export const rewriteRule = ({
  alertTypeId,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt,
  apiKeyOwner,
  apiKeyCreatedByUser,
  notifyWhen,
  muteAll,
  mutedInstanceIds,
  executionStatus,
  actions,
  systemActions,
  scheduledTaskId,
  snoozeSchedule,
  isSnoozedUntil,
  activeSnoozes,
  lastRun,
  nextRun,
  ...rest
}: SanitizedRule<RuleTypeParams> & { activeSnoozes?: string[] }) => {
  const actionsTemp: unknown[] = [];
  actions.forEach(({ id, actionTypeId, params, uuid, useAlertDataForTemplate, ...action }) => {
    const { group, frequency, alertsFilter } = action;
    actionsTemp.push({
      group,
      id,
      params,
      connector_type_id: actionTypeId,
      ...(frequency
        ? {
            frequency: {
              summary: frequency.summary,
              notify_when: frequency.notifyWhen,
              throttle: frequency.throttle,
            },
          }
        : {}),
      ...(uuid && { uuid }),
      ...(alertsFilter && { alerts_filter: alertsFilter }),
    });
  });
  (systemActions ?? []).forEach((actionTypeId, useAlertDataForTemplate, ...systemAction) => {
    actionsTemp.push({
      ...systemAction,
      connector_type_id: actionTypeId,
      ...(typeof useAlertDataForTemplate !== 'undefined'
        ? { use_alert_data_for_template: useAlertDataForTemplate }
        : {}),
    });
  });
  return {
    ...rest,
    rule_type_id: alertTypeId,
    created_by: createdBy,
    updated_by: updatedBy,
    created_at: createdAt,
    updated_at: updatedAt,
    api_key_owner: apiKeyOwner,
    notify_when: notifyWhen,
    mute_all: muteAll,
    muted_alert_ids: mutedInstanceIds,
    scheduled_task_id: scheduledTaskId,
    snooze_schedule: snoozeSchedule,
    ...(isSnoozedUntil != null ? { is_snoozed_until: isSnoozedUntil } : {}),
    ...(activeSnoozes != null ? { active_snoozes: activeSnoozes } : {}),
    execution_status: executionStatus && {
      ...omit(executionStatus, 'lastExecutionDate', 'lastDuration'),
      last_execution_date: executionStatus.lastExecutionDate,
      last_duration: executionStatus.lastDuration,
    },
    actions: actionsTemp,
    ...(lastRun ? { last_run: rewriteRuleLastRun(lastRun) } : {}),
    ...(nextRun ? { next_run: nextRun } : {}),
    ...(apiKeyCreatedByUser !== undefined ? { api_key_created_by_user: apiKeyCreatedByUser } : {}),
  };
};
