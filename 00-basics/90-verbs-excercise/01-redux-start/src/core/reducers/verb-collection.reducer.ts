import {
  VerbCollectionState,
  createDefaultVerbCollection,
} from './state.model';
import { ActionBase } from '../base';
import { actionIds } from 'core/actions';

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
