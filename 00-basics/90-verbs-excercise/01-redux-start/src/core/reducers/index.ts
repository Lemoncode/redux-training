import { combineReducers } from 'redux';

import { verbCollectionReducer } from './verb-collection';
import { VerbCollectionState } from './verb-collection/verb-collection.state.model';

export * from './verb-collection';

export interface GlobalState {
  verbCollectionState: VerbCollectionState;
}

export const globalReducers = combineReducers<GlobalState>({
  verbCollectionState: verbCollectionReducer,
});
