import { combineReducers } from 'redux';

import { verbCollectionReducer } from './verb-collection';
import { VerbCollectionState } from './verb-collection/verb-collection.state.model';

import { ScoreReducer, ScoreState } from './score';

import {
  SelectionCollectionState,
  selectedCollectionReducer,
} from './selection-collection';

export * from './verb-collection';
export * from './selection-collection';
export * from './score';

export interface GlobalState {
  verbCollectionState: VerbCollectionState;
  selectionCollectionState: SelectionCollectionState;
  scoreState: ScoreState;
}

export const globalReducers = combineReducers<GlobalState>({
  verbCollectionState: verbCollectionReducer,
  selectionCollectionState: selectedCollectionReducer,
  scoreState: ScoreReducer,
});
