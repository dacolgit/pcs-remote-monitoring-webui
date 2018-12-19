// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Browse } from './browse';
import {
  redux as appRedux,
  epics,
  getApplications,
  getEndpoints,
  getEntities,
  getNodes,
  getPendingStates,
  getReferences,
  getErrors,
  getTwins,
  getSupervisors,
  getPaths,
  getEndpointFilter,
  getFilteredEndpoints
} from 'store/reducers/opctwinReducer';

const mapStateToProps = state => ({
  applications: getApplications(state),
  endpoints: getEndpoints(state),
  entities: getEntities(state),
  nodes: getNodes(state),
  pendingStates: getPendingStates(state),
  references: getReferences(state),
  errors: getErrors(state),
  twins: getTwins(state),
  supervisors: getSupervisors(state),
  path: getPaths(state),
  endpointFilter: getEndpointFilter(state),
  filteredEndpoints: getFilteredEndpoints(state)
});

const mapDispatchToProps = dispatch => {
  window.savedDispatch = dispatch;
  window.savedEpics = epics;
  return {
    fetchApplications: (supervisor) => dispatch(epics.actions.fetchApplications(supervisor)),
    fetchEndpoints: (applicationId) => dispatch(epics.actions.fetchEndpoints(applicationId)),
    fetchNode: (endpointId, nodeId) => dispatch(epics.actions.fetchNode({ endpointId, nodeId })),
    fetchTwins: () => dispatch(epics.actions.fetchTwins()),
    fetchSupervisors: () => dispatch(epics.actions.fetchSupervisors()),
    fetchPath: (path) => dispatch(epics.actions.fetchPath(path)),
    updateEndpointFilter: endpointFilter => dispatch(appRedux.actions.updateEndpointFilter(endpointFilter))
  };
}

export const BrowseContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(Browse));