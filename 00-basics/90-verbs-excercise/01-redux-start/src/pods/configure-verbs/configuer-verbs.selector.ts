import { createSelector, Selector } from 'reselect';
import { GlobalState } from 'core/reducers';
import { VerbEntity } from './configure-verbs.vm';
import { mapFromVerbCollectionFromGlobalToVm } from './configure-verbs.mapper';

// TODO: create a selector to access the right POD or Global
// We would avoid future refactors of reducers

export const selectVerbCollection: Selector<
  GlobalState,
  VerbEntity[]
> = createSelector(
  (state: GlobalState) => state,
  state =>
    // Right now selection is empty, TODO: Build Reducer for this
    mapFromVerbCollectionFromGlobalToVm(state.verbCollectionState, [])
);
