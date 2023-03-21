/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { ApmFields, appendHash, hashKeysOf } from '@kbn/apm-synthtrace-client';
import { pick } from 'lodash';
import { ScenarioOptions } from '../../../cli/scenario';
import { createLosslessHistogram } from '../../utils/create_lossless_histogram';
import { createApmMetricAggregator } from './create_apm_metric_aggregator';

const KEY_FIELDS: Array<keyof ApmFields> = [
  'transaction.name',
  'transaction.result',
  'transaction.type',
  'event.outcome',

  'agent.name',
  'service.environment',
  'service.name',
  'service.version',
  'service.node.name',
  'service.runtime.name',
  'service.runtime.version',

  'service.language.name',
  'service.language.version',

  'host.hostname',
  'host.name',
  'host.os.platform',
  'container.id',
  'kubernetes.pod.name',

  'cloud.provider',
  'cloud.region',
  'cloud.availability_zone',
  'cloud.service.name',
  'cloud.account.id',
  'cloud.account.name',
  'cloud.project.id',
  'cloud.project.name',
  'cloud.machine.type',

  'faas.coldstart',
  'faas.id',
  'faas.trigger.type',
  'faas.name',
  'faas.version',
];

export function createTransactionMetricsAggregator(
  flushInterval: string,
  options?: ScenarioOptions
) {
  return createApmMetricAggregator({
    filter: (event) => event['processor.event'] === 'transaction',
    getAggregateKey: (event) => {
      // see https://github.com/elastic/apm-server/blob/main/x-pack/apm-server/aggregation/txmetrics/aggregator.go
      let key = hashKeysOf(event, KEY_FIELDS);
      key = appendHash(key, event['parent.id'] ? '1' : '0');
      return key;
    },
    flushInterval,
    init: (event) => {
      const set = pick(event, KEY_FIELDS);

      return {
        ...set,
        'metricset.name': 'transaction',
        'metricset.interval': flushInterval,
        'processor.event': 'metric',
        'processor.name': 'metric',
        'transaction.root': !event['parent.id'],
        'transaction.duration.histogram': createLosslessHistogram(),
        'transaction.duration.summary': {
          value_count: 0,
          sum: 0,
        },
        'event.success_count': {
          sum: 0,
          value_count: 0,
        },
        'transaction.aggregation.overflow_count': 0,
        _overflow_count: [0, 0], // [service, transaction]
        _aggregator_overflow_count: 0, // transaction
      };
    },
    aggregatorLimit: {
      field: ['service.name', 'transaction.name'],
      value: options?.overflowSettings?.maxGroups ?? Number.POSITIVE_INFINITY,
    },
    grouping: [
      {
        field: 'service.name',
        limit: options?.overflowSettings?.transactions?.maxServices ?? Number.POSITIVE_INFINITY,
      },
      {
        field: 'transaction.name',
        limit:
          options?.overflowSettings?.transactions?.maxTransactionGroupsPerService ??
          Number.POSITIVE_INFINITY,
      },
    ],
    reduce: (metric, event) => {
      const duration = event['transaction.duration.us']!;
      metric['transaction.duration.histogram'].record(duration);

      if (event['event.outcome'] === 'success' || event['event.outcome'] === 'failure') {
        metric['event.success_count'].value_count += 1;
      }

      if (event['event.outcome'] === 'success') {
        metric['event.success_count'].sum += 1;
      }

      const summary = metric['transaction.duration.summary'];

      summary.sum += duration;
      summary.value_count += 1;

      if (event['transaction.name'] === '_other') {
        for (const field of KEY_FIELDS) {
          delete metric[field];
        }
      }
    },
    serialize: (metric) => {
      const serialized = metric['transaction.duration.histogram'].serialize();
      metric['transaction.duration.histogram'] = {
        values: serialized.values,
        counts: serialized.counts,
      };
      metric._doc_count = serialized.total;

      if (metric['transaction.name'] === '_other') {
        metric['transaction.aggregation.overflow_count'] =
          metric._aggregator_overflow_count || metric._overflow_count[1];
      }

      delete metric._overflow_count;
      delete metric._aggregator_overflow_count;

      return metric;
    },
  });
}
