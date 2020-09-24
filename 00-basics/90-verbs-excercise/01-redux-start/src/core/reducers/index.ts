import { combineReducers } from 'redux';

import { verbCollectionReducer } from './verb-collection.reducer';
import { VerbCollectionState } from './state.model';

export * from './state.model';

export interface GlobalState {
  verbCollectionState: VerbCollectionState;
}

export const globalReducers = combineReducers<GlobalState>({
  verbCollectionState: verbCollectionReducer,
});
