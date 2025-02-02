/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { encode } from '@kbn/rison';
import { formatPageFilterSearchParam } from '../../common/utils/format_page_filter_search_param';
import { TOP_N_CONTAINER } from '../screens/network/flows';
import {
  ADD_EXCEPTION_BTN,
  ALERT_CHECKBOX,
  CLOSE_ALERT_BTN,
  CLOSE_SELECTED_ALERTS_BTN,
  EXPAND_ALERT_BTN,
  GROUP_BY_TOP_INPUT,
  MANAGE_ALERT_DETECTION_RULES_BTN,
  MARK_ALERT_ACKNOWLEDGED_BTN,
  OPEN_ALERT_BTN,
  SEND_ALERT_TO_TIMELINE_BTN,
  SELECT_AGGREGATION_CHART,
  TAKE_ACTION_POPOVER_BTN,
  TIMELINE_CONTEXT_MENU_BTN,
  CLOSE_FLYOUT,
  OPEN_ANALYZER_BTN,
  TAKE_ACTION_BTN,
  TAKE_ACTION_MENU,
  ADD_ENDPOINT_EXCEPTION_BTN,
  DATAGRID_CHANGES_IN_PROGRESS,
  CLOSED_ALERTS_FILTER_BTN,
  OPENED_ALERTS_FILTER_BTN,
  EVENT_CONTAINER_TABLE_LOADING,
  SELECT_ALL_ALERTS,
  SELECT_ALL_VISIBLE_ALERTS,
  CELL_ADD_TO_TIMELINE_BUTTON,
  CELL_FILTER_IN_BUTTON,
  CELL_SHOW_TOP_FIELD_BUTTON,
  ACTIONS_EXPAND_BUTTON,
  ALERT_EMBEDDABLE_PROGRESS_BAR,
  ALERT_COUNT_TABLE_COLUMN,
  SELECT_HISTOGRAM,
  CELL_FILTER_OUT_BUTTON,
  SHOW_TOP_N_CLOSE_BUTTON,
  ALERTS_HISTOGRAM_LEGEND,
  LEGEND_ACTIONS,
  SESSION_VIEWER_BUTTON,
  CLOSE_OVERLAY,
} from '../screens/alerts';
import { LOADING_INDICATOR, REFRESH_BUTTON } from '../screens/security_header';
import { TIMELINE_COLUMN_SPINNER } from '../screens/timeline';
import {
  UPDATE_ENRICHMENT_RANGE_BUTTON,
  ENRICHMENT_QUERY_END_INPUT,
  ENRICHMENT_QUERY_RANGE_PICKER,
  ENRICHMENT_QUERY_START_INPUT,
  THREAT_INTEL_TAB,
  CELL_EXPAND_VALUE,
  CELL_EXPANSION_POPOVER,
  USER_DETAILS_LINK,
  ALERT_FLYOUT,
} from '../screens/alerts_details';
import { FIELD_INPUT } from '../screens/exceptions';
import {
  DETECTION_PAGE_FILTERS_LOADING,
  DETECTION_PAGE_FILTER_GROUP_CONTEXT_MENU,
  DETECTION_PAGE_FILTER_GROUP_LOADING,
  DETECTION_PAGE_FILTER_GROUP_RESET_BUTTON,
  DETECTION_PAGE_FILTER_GROUP_WRAPPER,
  OPTION_LISTS_EXISTS,
  OPTION_LISTS_LOADING,
  OPTION_LIST_VALUES,
  OPTION_SELECTABLE,
} from '../screens/common/filter_group';
import { LOADING_SPINNER } from '../screens/common/page';
import { ALERTS_URL } from '../urls/navigation';
import { FIELDS_BROWSER_BTN } from '../screens/rule_details';
import type { FilterItemObj } from '../../public/common/components/filter_group/types';
import { visit } from './login';

export const addExceptionFromFirstAlert = () => {
  expandFirstAlertActions();
  cy.get(ADD_EXCEPTION_BTN, { timeout: 10000 }).should('be.visible');
  cy.get(ADD_EXCEPTION_BTN, { timeout: 10000 }).first().click();
  cy.get(LOADING_SPINNER).should('exist');
  cy.get(LOADING_SPINNER).should('not.exist');
};

export const openAddEndpointExceptionFromFirstAlert = () => {
  expandFirstAlertActions();
  cy.root()
    .pipe(($el) => {
      $el.find(ADD_ENDPOINT_EXCEPTION_BTN).trigger('click');
      return $el.find(FIELD_INPUT);
    })
    .should('be.visible');
};

export const openAddExceptionFromAlertDetails = () => {
  cy.get(EXPAND_ALERT_BTN).first().click({ force: true });

  cy.root()
    .pipe(($el) => {
      $el.find(TAKE_ACTION_BTN).trigger('click');
      return $el.find(TAKE_ACTION_MENU);
    })
    .should('be.visible');

  cy.root()
    .pipe(($el) => {
      $el.find(ADD_EXCEPTION_BTN).trigger('click');
      return $el.find(ADD_EXCEPTION_BTN);
    })
    .should('not.be.visible');
};

export const closeFirstAlert = () => {
  expandFirstAlertActions();
  cy.get(CLOSE_ALERT_BTN)
    .pipe(($el) => $el.trigger('click'))
    .should('not.exist');
};

export const closeAlerts = () => {
  cy.get(TAKE_ACTION_POPOVER_BTN)
    .first()
    .pipe(($el) => $el.trigger('click'))
    .should('be.visible');

  cy.get(CLOSE_SELECTED_ALERTS_BTN)
    .pipe(($el) => $el.trigger('click'))
    .should('not.be.visible');
};

export const expandFirstAlertActions = () => {
  waitForAlerts();

  let count = 0;

  const click = ($el: JQuery<HTMLElement>) => {
    count++;
    return $el.trigger('click');
  };

  /*
   *
   * Sometimes it takes some time for UI to attach event listener to
   * TIMELINE_CONTEXT_MENU_BTN and cypress is too fast to click.
   * Becuase of this popover does not open when click.
   * pipe().should() makes sure that pipe function is repeated until should becomes true
   *
   * */

  cy.get(TIMELINE_CONTEXT_MENU_BTN)
    .first()
    .should('be.visible')
    .pipe(click)
    .should('have.attr', 'data-popover-open', 'true')
    .then(() => {
      cy.log(`Clicked ${count} times`);
    });
};

export const expandFirstAlert = () => {
  cy.root()
    .pipe(($el) => {
      $el.find(EXPAND_ALERT_BTN).trigger('click');
      return $el.find(ALERT_FLYOUT);
    })
    .should('be.visible');
};

export const closeAlertFlyout = () => cy.get(CLOSE_FLYOUT).click();

export const viewThreatIntelTab = () => cy.get(THREAT_INTEL_TAB).click();

export const setEnrichmentDates = (from?: string, to?: string) => {
  cy.get(ENRICHMENT_QUERY_RANGE_PICKER).within(() => {
    if (from) {
      cy.get(ENRICHMENT_QUERY_START_INPUT).first().type(`{selectall}${from}{enter}`);
    }
    if (to) {
      cy.get(ENRICHMENT_QUERY_END_INPUT).type(`{selectall}${to}{enter}`);
    }
  });
  cy.get(UPDATE_ENRICHMENT_RANGE_BUTTON).click();
};

export const refreshAlertPageFilter = () => {
  // Currently, system keeps the cache of option List for 1 minute so as to avoid
  // lot of unncessary traffic. Cypress is too fast and we cannot wait for a minute
  // to trigger a reload of Page Filters.
  // It is faster to refresh the page which will reload the Page Filter values
  // cy.reload();
  waitForAlerts();
};

export const togglePageFilterPopover = (filterIndex: number) => {
  cy.get(OPTION_LIST_VALUES(filterIndex)).click({ force: true });
};

export const openPageFilterPopover = (filterIndex: number) => {
  cy.log(`Opening Page filter popover for index ${filterIndex}`);
  cy.get(OPTION_LIST_VALUES(filterIndex))
    .pipe(($el) => $el.trigger('click'))
    .should('have.class', 'euiFilterButton-isSelected');
  // cy.root().then(($el) => {
  // const existsOption = $el.find(OPTION_LISTS_EXISTS);
  // const optionsList = $el.find(OPTION_LIST_VALUES(filterIndex));
  // if (!existsOption || existsOption.length === 0) {
  // optionsList.trigger('click');
  // }
  // });
  // cy.get(OPTION_LISTS_EXISTS).should('be.visible');
};

export const closePageFilterPopover = (filterIndex: number) => {
  cy.log(`Closing Page filter popover for index ${filterIndex}`);
  cy.get(OPTION_LIST_VALUES(filterIndex))
    .pipe(($el) => $el.trigger('click'))
    .should('not.have.class', 'euiFilterButton-isSelected');
  // cy.root().then(($el) => {
  // const existsOption = $el.find(OPTION_LISTS_EXISTS);
  // if (existsOption.length > 0) {
  // const optionsList = $el.find(OPTION_LIST_VALUES(filterIndex));
  // optionsList.trigger('click');
  // }
  // });
  // cy.get(OPTION_LISTS_EXISTS).should('not.be.visible');
};

export const clearAllSelections = () => {
  cy.get(OPTION_LISTS_EXISTS)
    .click({ force: true })
    .then(($el) => {
      if ($el.attr('aria-checked', 'false')) {
        // check it
        $el.trigger('click');
      }
      // uncheck it
      $el.trigger('click');
    });
};

export const selectPageFilterValue = (filterIndex: number, ...values: string[]) => {
  refreshAlertPageFilter();
  openPageFilterPopover(filterIndex);
  clearAllSelections();
  values.forEach((value) => {
    cy.get(OPTION_SELECTABLE(filterIndex, value)).click({ force: true });
  });
  closePageFilterPopover(filterIndex);
  waitForAlerts();
};

export const goToClosedAlertsOnRuleDetailsPage = () => {
  cy.get(CLOSED_ALERTS_FILTER_BTN).click();
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(REFRESH_BUTTON).should('have.attr', 'aria-label', 'Refresh query');
  cy.get(TIMELINE_COLUMN_SPINNER).should('not.exist');
};

export const goToClosedAlerts = () => {
  // cy.get(CLOSED_ALERTS_FILTER_BTN).click();
  /*
   * below line commented because alertPageFiltersEnabled feature flag
   * is disabled by default
   * Target: enable by default in v8.8
   *
   * selectPageFilterValue(0, 'closed');
   *
   * */
  waitForPageFilters();
  selectPageFilterValue(0, 'closed');
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(REFRESH_BUTTON).should('have.attr', 'aria-label', 'Refresh query');
  cy.get(TIMELINE_COLUMN_SPINNER).should('not.exist');
};

export const goToManageAlertsDetectionRules = () => {
  cy.get(MANAGE_ALERT_DETECTION_RULES_BTN).should('exist').click({ force: true });
};

export const goToOpenedAlertsOnRuleDetailsPage = () => {
  cy.get(OPENED_ALERTS_FILTER_BTN).click({ force: true });
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(REFRESH_BUTTON).should('have.attr', 'aria-label', 'Refresh query');
};

export const goToOpenedAlerts = () => {
  // cy.get(OPENED_ALERTS_FILTER_BTN).click({ force: true });
  /*
   * below line commented because alertPageFiltersEnabled feature flag
   * is disabled by default
   * Target: enable by default in v8.8
   *
   * selectPageFilterValue(0, 'open');
   *
   */
  selectPageFilterValue(0, 'open');
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(REFRESH_BUTTON).should('have.attr', 'aria-label', 'Refresh query');
};

export const openFirstAlert = () => {
  expandFirstAlertActions();
  cy.get(OPEN_ALERT_BTN).should('be.visible').click({ force: true });
};

export const openAlerts = () => {
  cy.get(TAKE_ACTION_POPOVER_BTN).click({ force: true });
  cy.get(OPEN_ALERT_BTN).click();
};

export const selectCountTable = () => {
  cy.get(SELECT_AGGREGATION_CHART).click({ force: true });
};

export const selectAlertsHistogram = () => {
  cy.get(SELECT_HISTOGRAM).click({ force: true });
};

export const clearGroupByTopInput = () => {
  cy.get(GROUP_BY_TOP_INPUT).focus();
  cy.get(GROUP_BY_TOP_INPUT).type('{backspace}');
};

export const goToAcknowledgedAlerts = () => {
  /*
   * below line commented because alertPageFiltersEnabled feature flag
   * is disabled by default
   * Target: enable by default in v8.8
   *
   * selectPageFilterValue(0, 'acknowledged');
   *
   */
  // cy.get(ACKNOWLEDGED_ALERTS_FILTER_BTN).click();
  selectPageFilterValue(0, 'acknowledged');
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(REFRESH_BUTTON).should('have.attr', 'aria-label', 'Refresh query');
  cy.get(TIMELINE_COLUMN_SPINNER).should('not.exist');
};

export const markAcknowledgedFirstAlert = () => {
  expandFirstAlertActions();
  cy.get(MARK_ALERT_ACKNOWLEDGED_BTN).click();
};

export const openAlertsFieldBrowser = () => {
  cy.get(FIELDS_BROWSER_BTN).click();
};

export const selectNumberOfAlerts = (numberOfAlerts: number) => {
  for (let i = 0; i < numberOfAlerts; i++) {
    waitForAlerts();
    cy.get(ALERT_CHECKBOX).eq(i).as('checkbox').click({ force: true });
    cy.get('@checkbox').should('have.attr', 'checked');
  }
};

export const investigateFirstAlertInTimeline = () => {
  cy.get(SEND_ALERT_TO_TIMELINE_BTN).first().click({ force: true });
};

export const openAnalyzerForFirstAlertInTimeline = () => {
  cy.get(OPEN_ANALYZER_BTN).first().click({ force: true });
};

export const closeAnalyzer = () => {
  cy.get(CLOSE_OVERLAY).should('be.visible').trigger('click');
};

export const clickAlertsHistogramLegend = () => {
  cy.get(ALERTS_HISTOGRAM_LEGEND).click();
};

export const clickAlertsHistogramLegendAddToTimeline = (ruleName: string) => {
  cy.get(LEGEND_ACTIONS.ADD_TO_TIMELINE(ruleName)).click();
};

export const clickAlertsHistogramLegendFilterOut = (ruleName: string) => {
  cy.get(LEGEND_ACTIONS.FILTER_OUT(ruleName)).click();
};

export const clickAlertsHistogramLegendFilterFor = (ruleName: string) => {
  cy.get(LEGEND_ACTIONS.FILTER_FOR(ruleName)).click();
};

const clickAction = (propertySelector: string, rowIndex: number, actionSelector: string) => {
  cy.get(propertySelector).eq(rowIndex).trigger('mouseover');
  cy.get(actionSelector).first().click({ force: true });
};
export const clickExpandActions = (propertySelector: string, rowIndex: number) => {
  clickAction(propertySelector, rowIndex, ACTIONS_EXPAND_BUTTON);
};
export const addAlertPropertyToTimeline = (propertySelector: string, rowIndex: number) => {
  clickAction(propertySelector, rowIndex, CELL_ADD_TO_TIMELINE_BUTTON);
};
export const filterForAlertProperty = (propertySelector: string, rowIndex: number) => {
  clickAction(propertySelector, rowIndex, CELL_FILTER_IN_BUTTON);
};
export const filterOutAlertProperty = (propertySelector: string, rowIndex: number) => {
  clickAction(propertySelector, rowIndex, CELL_FILTER_OUT_BUTTON);
};
export const showTopNAlertProperty = (propertySelector: string, rowIndex: number) => {
  clickExpandActions(propertySelector, rowIndex);
  cy.get(CELL_SHOW_TOP_FIELD_BUTTON).first().click({ force: true });
};
export const closeTopNAlertProperty = () => {
  cy.get(TOP_N_CONTAINER).then(() => {
    cy.get(SHOW_TOP_N_CLOSE_BUTTON).click();
  });
};

export const waitForAlerts = () => {
  /*
   * below line commented because alertpagefiltersenabled feature flag
   * is disabled by default
   * target: enable by default in v8.8
   *
   * waitforpagefilters();
   *
   * */
  waitForPageFilters();
  cy.get(REFRESH_BUTTON).should('not.have.attr', 'aria-label', 'Needs updating');
  cy.get(DATAGRID_CHANGES_IN_PROGRESS).should('not.be.true');
  cy.get(EVENT_CONTAINER_TABLE_LOADING).should('not.exist');
  cy.get(LOADING_INDICATOR).should('not.exist');
};

export const expandAlertTableCellValue = (columnSelector: string, row = 1) => {
  cy.get(columnSelector).eq(1).focus().find(CELL_EXPAND_VALUE).click({ force: true });
};

export const scrollAlertTableColumnIntoView = (columnSelector: string) => {
  cy.get(columnSelector).eq(0).scrollIntoView();

  // Wait for data grid to populate column
  cy.waitUntil(() => cy.get(columnSelector).then(($el) => $el.length > 1), {
    interval: 500,
    timeout: 12000,
  });
};

export const openUserDetailsFlyout = () => {
  cy.get(CELL_EXPANSION_POPOVER).find(USER_DETAILS_LINK).click();
};

export const waitForPageFilters = () => {
  cy.log('Waiting for Page Filters');
  cy.url().then((urlString) => {
    const url = new URL(urlString);
    if (url.pathname.endsWith(ALERTS_URL)) {
      // since these are only valid on the alert page
      cy.get(DETECTION_PAGE_FILTER_GROUP_WRAPPER).should('exist');
      cy.get(DETECTION_PAGE_FILTER_GROUP_LOADING).should('not.exist');
      cy.get(DETECTION_PAGE_FILTERS_LOADING).should('not.exist');
      cy.get(OPTION_LISTS_LOADING).should('have.lengthOf', 0);
    } else {
      cy.log('Skipping Page Filters Wait');
    }
  });
};

export const resetFilters = () => {
  cy.get(DETECTION_PAGE_FILTER_GROUP_CONTEXT_MENU).click({ force: true });
  cy.get(DETECTION_PAGE_FILTER_GROUP_RESET_BUTTON).click({ force: true });
  waitForPageFilters();
};

export const parseAlertsCountToInt = (count: string | number) =>
  typeof count === 'number' ? count : parseInt(count, 10);

export const sumAlertCountFromAlertCountTable = (callback?: (sumOfEachRow: number) => void) => {
  let sumOfEachRow = 0;
  const alertCountColumn = ALERT_COUNT_TABLE_COLUMN(3);

  cy.get(ALERT_EMBEDDABLE_PROGRESS_BAR)
    .should('not.exist')
    .then(() => {
      cy.get(alertCountColumn)
        .each((row) => {
          sumOfEachRow += parseInt(row.text(), 10);
        })
        .then(() => {
          callback?.(sumOfEachRow);
        });
    });
};

export const selectFirstPageAlerts = () => {
  cy.get(SELECT_ALL_VISIBLE_ALERTS).first().scrollIntoView().click({ force: true });
};

export const selectAllAlerts = () => {
  selectFirstPageAlerts();
  cy.get(SELECT_ALL_ALERTS).click();
};

export const visitAlertsPageWithCustomFilters = (pageFilters: FilterItemObj[]) => {
  const pageFilterUrlVal = encode(formatPageFilterSearchParam(pageFilters));
  const newURL = `${ALERTS_URL}?pageFilters=${pageFilterUrlVal}`;
  visit(newURL);
};

export const openSessionViewerFromAlertTable = (rowIndex: number = 0) => {
  cy.get(SESSION_VIEWER_BUTTON).eq(rowIndex).should('be.visible');
  cy.get(SESSION_VIEWER_BUTTON).eq(rowIndex).trigger('click');
};

export const closeSessionViewerFromAlertTable = () => {
  cy.get(CLOSE_OVERLAY).trigger('click');
};
