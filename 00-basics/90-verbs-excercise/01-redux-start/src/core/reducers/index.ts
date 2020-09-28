import { combineReducers } from 'redux';

import { verbCollectionReducer } from './verb-collection';
import { VerbCollectionState } from './verb-collection/verb-collection.state.model';

import {
  SelectionCollectionState,
  selectedCollectionReducer,
} from './selection-collection';

export * from './verb-collection';
export * from './selection-collection';

export interface GlobalState {
  verbCollectionState: VerbCollectionState;
  selectionCollectionState: SelectionCollectionState;
}

export const globalReducers = combineReducers<GlobalState>({
  verbCollectionState: verbCollectionReducer,
  selectionCollectionState: selectedCollectionReducer,
});
