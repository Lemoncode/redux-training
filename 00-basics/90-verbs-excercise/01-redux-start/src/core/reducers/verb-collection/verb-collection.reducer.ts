import {
  VerbCollectionState,
  createDefaultVerbCollection,
} from './verb-collection.state.model';
import { ActionBase } from '../../base';
import { actionIds } from '../action-ids';

export const verbCollectionReducer = (
  state: VerbCollectionState = createDefaultVerbCollection(),
  action: ActionBase
): VerbCollectionState => {
  switch (action.type) {
    case actionIds.setVerbsCollectionRequestCompleted:
      return action.payload;
      break;
  }

  return state;
};
