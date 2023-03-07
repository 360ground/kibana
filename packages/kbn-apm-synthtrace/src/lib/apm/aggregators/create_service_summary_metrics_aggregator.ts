/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { ApmFields, hashKeysOf } from '@kbn/apm-synthtrace-client';
import { identity, noop, pick } from 'lodash';
import { ScenarioOptions } from '../../../cli/scenario';
import { createApmMetricAggregator } from './create_apm_metric_aggregator';

const KEY_FIELDS: Array<keyof ApmFields> = [
  'agent.name',
  'service.environment',
  'service.name',
  'service.language.name',
];

export function createServiceSummaryMetricsAggregator(
  flushInterval: string,
  options?: ScenarioOptions
) {
  return createApmMetricAggregator({
    filter: () => true,
    getAggregateKey: (event) => {
      // see https://github.com/elastic/apm-server/blob/main/x-pack/apm-server/aggregation/txmetrics/aggregator.go
      return hashKeysOf(event, KEY_FIELDS);
    },
    flushInterval,
    init: (event) => {
      const set = pick(event, KEY_FIELDS);

      return {
        ...set,
        'metricset.name': 'service_summary',
        'metricset.interval': flushInterval,
        'processor.event': 'metric',
        'processor.name': 'metric',
      };
    },
    group: (set, key, serviceListMap) => {
      const { service_transactions: serviceTransaction = {} } = options || {};
      const maxServiceOverflowCount = serviceTransaction?.max_groups ?? 10_000;
      let service = serviceListMap.get(set['service.name']);
      if (!service) {
        service = {
          transactionCount: 0,
          overflowKey: null,
        };
        const hasServiceBucketOverflown = serviceListMap.size >= maxServiceOverflowCount;
        if (hasServiceBucketOverflown) {
          set['service.name'] = '_other';
          service.overflowKey = key;
        }
        serviceListMap.set(set['service.name'], service);
      }
    },
    reduce: noop,
    serialize: identity,
  });
}
