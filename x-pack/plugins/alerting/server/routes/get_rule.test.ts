/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { pick } from 'lodash';
import { getRuleRoute } from './get_rule';
import { httpServiceMock } from '@kbn/core/server/mocks';
import { licenseStateMock } from '../lib/license_state.mock';
import { verifyApiAccess } from '../lib/license_api_access';
import { mockHandlerArguments } from './_mock_handler_arguments';
import { rulesClientMock } from '../rules_client.mock';
import { RuleActionTypes, SanitizedDefaultRuleAction, SanitizedRule } from '../types';
import { AsApiContract } from './lib';

const rulesClient = rulesClientMock.create();
jest.mock('../lib/license_api_access', () => ({
  verifyApiAccess: jest.fn(),
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getRuleRoute', () => {
  const mockedAlert: SanitizedRule<{
    bar: boolean;
  }> = {
    id: '1',
    alertTypeId: '1',
    schedule: { interval: '10s' },
    params: {
      bar: true,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    actions: [
      {
        group: 'default',
        id: '2',
        actionTypeId: 'test',
        params: {
          foo: true,
        },
        uuid: '123-456',
        alertsFilter: {
          query: {
            kql: 'name:test',
            dsl: '{"must": {"term": { "name": "test" }}}',
            filters: [],
          },
          timeframe: {
            days: [1],
            hours: { start: '08:00', end: '17:00' },
            timezone: 'UTC',
          },
        },
        type: RuleActionTypes.DEFAULT,
      },
    ],
    consumer: 'bar',
    name: 'abc',
    tags: ['foo'],
    enabled: true,
    muteAll: false,
    notifyWhen: 'onActionGroupChange',
    createdBy: '',
    updatedBy: '',
    apiKeyOwner: '',
    throttle: '30s',
    mutedInstanceIds: [],
    executionStatus: {
      status: 'unknown',
      lastExecutionDate: new Date('2020-08-20T19:23:38Z'),
    },
    revision: 0,
  };

  const mockedAction0 = mockedAlert.actions[0] as SanitizedDefaultRuleAction;
  const getResult: AsApiContract<SanitizedRule<{ bar: boolean }>> = {
    ...pick(mockedAlert, 'consumer', 'name', 'schedule', 'tags', 'params', 'throttle', 'enabled'),
    rule_type_id: mockedAlert.alertTypeId,
    notify_when: mockedAlert.notifyWhen,
    mute_all: mockedAlert.muteAll,
    created_by: mockedAlert.createdBy,
    updated_by: mockedAlert.updatedBy,
    api_key_owner: mockedAlert.apiKeyOwner,
    muted_alert_ids: mockedAlert.mutedInstanceIds,
    created_at: mockedAlert.createdAt,
    updated_at: mockedAlert.updatedAt,
    id: mockedAlert.id,
    revision: mockedAlert.revision,
    execution_status: {
      status: mockedAlert.executionStatus.status,
      last_execution_date: mockedAlert.executionStatus.lastExecutionDate,
    },
    actions: [
      {
        group: mockedAction0.group,
        id: mockedAction0.id,
        params: mockedAction0.params,
        connector_type_id: mockedAction0.actionTypeId,
        uuid: mockedAction0.uuid,
        alerts_filter: mockedAction0.alertsFilter,
        type: mockedAction0.type,
      },
    ],
  };

  it('gets a rule with proper parameters', async () => {
    const licenseState = licenseStateMock.create();
    const router = httpServiceMock.createRouter();

    getRuleRoute(router, licenseState);
    const [config, handler] = router.get.mock.calls[0];

    expect(config.path).toMatchInlineSnapshot(`"/api/alerting/rule/{id}"`);

    rulesClient.get.mockResolvedValueOnce(mockedAlert);

    const [context, req, res] = mockHandlerArguments(
      { rulesClient },
      {
        params: { id: '1' },
      },
      ['ok']
    );
    await handler(context, req, res);

    expect(rulesClient.get).toHaveBeenCalledTimes(1);
    expect(rulesClient.get.mock.calls[0][0].id).toEqual('1');

    expect(res.ok).toHaveBeenCalledWith({
      body: getResult,
    });
  });

  it('ensures the license allows getting rules', async () => {
    const licenseState = licenseStateMock.create();
    const router = httpServiceMock.createRouter();

    getRuleRoute(router, licenseState);

    const [, handler] = router.get.mock.calls[0];

    rulesClient.get.mockResolvedValueOnce(mockedAlert);

    const [context, req, res] = mockHandlerArguments(
      { rulesClient },
      {
        params: { id: '1' },
      },
      ['ok']
    );

    await handler(context, req, res);

    expect(verifyApiAccess).toHaveBeenCalledWith(licenseState);
  });

  it('ensures the license check prevents getting rules', async () => {
    const licenseState = licenseStateMock.create();
    const router = httpServiceMock.createRouter();

    (verifyApiAccess as jest.Mock).mockImplementation(() => {
      throw new Error('OMG');
    });

    getRuleRoute(router, licenseState);

    const [, handler] = router.get.mock.calls[0];

    rulesClient.get.mockResolvedValueOnce(mockedAlert);

    const [context, req, res] = mockHandlerArguments(
      { rulesClient },
      {
        params: { id: '1' },
      },
      ['ok']
    );

    expect(handler(context, req, res)).rejects.toMatchInlineSnapshot(`[Error: OMG]`);

    expect(verifyApiAccess).toHaveBeenCalledWith(licenseState);
  });
});
