/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { useCallback, useMemo } from 'react';
import type { Query, TimeRange, Filter } from '@kbn/es-query';
import { i18n } from '@kbn/i18n';
import {
  EuiFlexGrid,
  useEuiTheme,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { css } from '@emotion/react';
import { METRICS_APP_DATA_TEST_SUBJ } from '../../../../../apps/metrics_app';
import { useKibanaContextForPlugin } from '../../../../../hooks/use_kibana';
import { useUnifiedSearchContext } from '../../hooks/use_unified_search';
import { ControlsContent } from './controls_content';
import { useMetricsDataViewContext } from '../../hooks/use_data_view';
import { LimitOptions } from './limit_options';
import { HostLimitOptions } from '../../types';

export const UnifiedSearchBar = () => {
  const {
    services: { unifiedSearch, application },
  } = useKibanaContextForPlugin();
  const { dataView } = useMetricsDataViewContext();
  const { searchCriteria, onSubmit } = useUnifiedSearchContext();

  const { SearchBar } = unifiedSearch.ui;

  const onLimitChange = (limit: number) => {
    onSubmit({ limit });
  };

  const onPanelFiltersChange = useCallback(
    (panelFilters: Filter[]) => {
      onSubmit({ panelFilters });
    },
    [onSubmit]
  );

  const handleRefresh = (payload: { query?: Query; dateRange: TimeRange }, isUpdate?: boolean) => {
    // This makes sure `onQueryChange` is only called when the submit button is clicked
    if (isUpdate === false) {
      onSubmit(payload);
    }
  };

  return (
    <StickyContainer>
      <EuiFlexGroup direction="column" gutterSize="xs">
        <EuiFlexItem>
          <SearchBar
            appName={'Infra Hosts'}
            displayStyle="inPage"
            indexPatterns={dataView && [dataView]}
            placeholder={i18n.translate('xpack.infra.hosts.searchPlaceholder', {
              defaultMessage: 'Search hosts (E.g. cloud.provider:gcp AND system.load.1 > 0.5)',
            })}
            onQuerySubmit={handleRefresh}
            showSaveQuery={Boolean(application?.capabilities?.visualize?.saveQuery)}
            showDatePicker
            showFilterBar
            showQueryInput
            showQueryMenu
            useDefaultBehaviors
            isAutoRefreshDisabled
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGroup direction="row" alignItems="center" wrap={false} gutterSize="xs">
            <EuiFlexItem>
              <ControlsContent
                timeRange={searchCriteria.dateRange}
                dataView={dataView}
                query={searchCriteria.query}
                filters={searchCriteria.filters}
                onFiltersChange={onPanelFiltersChange}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <LimitOptions
                limit={searchCriteria.limit as HostLimitOptions}
                onChange={onLimitChange}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiHorizontalRule margin="none" />
    </StickyContainer>
  );
};

const StickyContainer = (props: { children: React.ReactNode }) => {
  const { euiTheme } = useEuiTheme();

  const top = useMemo(() => {
    const wrapper = document.querySelector(`[data-test-subj="${METRICS_APP_DATA_TEST_SUBJ}"]`);
    if (!wrapper) {
      return `calc(${euiTheme.size.xxxl} * 2)`;
    }

    return `${wrapper.getBoundingClientRect().top}px`;
  }, [euiTheme]);

  return (
    <EuiFlexGrid
      gutterSize="none"
      css={css`
        position: sticky;
        top: ${top};
        z-index: ${euiTheme.levels.header};
        background: ${euiTheme.colors.emptyShade};
        padding-top: ${euiTheme.size.m};
        margin-top: -${euiTheme.size.l};
      `}
      {...props}
    />
  );
};
