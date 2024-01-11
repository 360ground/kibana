/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { FC } from 'react';
import {
  HistogramBarSeries,
  Chart,
  ScaleType,
  Settings,
  BrushEndListener,
  PartialTheme,
  Tooltip,
  TooltipType,
  LEGACY_LIGHT_THEME,
} from '@elastic/charts';
import { i18n } from '@kbn/i18n';
import { euiLightVars } from '@kbn/ui-theme';
import { Axes } from './axes';
import { LoadingWrapper } from './loading_wrapper';

export interface LineChartPoint {
  time: number | string;
  value: number;
}

interface Props {
  eventRateChartData: LineChartPoint[];
  height: string;
  width: string;
  showAxis?: boolean;
  loading?: boolean;
  fadeChart?: boolean;
  onBrushEnd?: BrushEndListener;
}

export const EventRateChart: FC<Props> = ({
  eventRateChartData,
  height,
  width,
  showAxis,
  loading = false,
  onBrushEnd,
}) => {
  const theme: PartialTheme = {
    scales: { histogramPadding: 0.2 },
  };

  return (
    <div
      style={{ width, height }}
      data-test-subj={`mlEventRateChart ${eventRateChartData.length ? 'withData' : 'empty'}`}
    >
      <LoadingWrapper height={height} hasData={eventRateChartData.length > 0} loading={loading}>
        <Chart>
          {showAxis === true && <Axes />}
          <Tooltip type={TooltipType.None} />
          <Settings
            onBrushEnd={onBrushEnd}
            baseTheme={LEGACY_LIGHT_THEME}
            theme={theme}
            locale={i18n.getLocale()}
          />

          <HistogramBarSeries
            id="event_rate"
            xScaleType={ScaleType.Time}
            yScaleType={ScaleType.Linear}
            xAccessor={'time'}
            yAccessors={['value']}
            data={eventRateChartData}
            color={euiLightVars.euiColorVis0}
          />
        </Chart>
      </LoadingWrapper>
    </div>
  );
};
