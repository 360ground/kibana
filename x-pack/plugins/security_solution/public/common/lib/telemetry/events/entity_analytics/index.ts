/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { TelemetryEvent } from '../../types';
import { TelemetryEventTypes } from '../../constants';

export const entityClickedEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.EntityDetailsClicked,
  schema: {
    entity: {
      type: 'keyword',
      _meta: {
        description: 'Entity name (host|user)',
        optional: false,
      },
    },
  },
};

export const entityAlertsClickedEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.EntityAlertsClicked,
  schema: {
    entity: {
      type: 'keyword',
      _meta: {
        description: 'Entity name (host|user)',
        optional: false,
      },
    },
  },
};

export const entityRiskFilteredEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.EntityRiskFiltered,
  schema: {
    entity: {
      type: 'keyword',
      _meta: {
        description: 'Entity name (host|user)',
        optional: false,
      },
    },
    selectedSeverity: {
      type: 'keyword',
      _meta: {
        description: 'Selected severity (Unknown|Low|Moderate|High|Critical)',
        optional: false,
      },
    },
  },
};

export const toggleRiskSummaryClickedEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.ToggleRiskSummaryClicked,
  schema: {
    entity: {
      type: 'keyword',
      _meta: {
        description: 'Entity name (host|user)',
        optional: false,
      },
    },
    action: {
      type: 'keyword',
      _meta: {
        description: 'It defines if the section is opening or closing (show|hide)',
        optional: false,
      },
    },
  },
};

export const RiskInputsExpandedFlyoutOpenedEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.RiskInputsExpandedFlyoutOpened,
  schema: {
    entity: {
      type: 'keyword',
      _meta: {
        description: 'Entity name (host|user)',
        optional: false,
      },
    },
  },
};

export const addRiskInputToTimelineClickedEvent: TelemetryEvent = {
  eventType: TelemetryEventTypes.AddRiskInputToTimelineClicked,
  schema: {
    quantity: {
      type: 'integer',
      _meta: {
        description: 'Quantity of alerts added to timeline',
        optional: false,
      },
    },
  },
};
