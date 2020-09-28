import { ActionBase } from '../../base';
import { actionIds } from '../action-ids';
import {
  SelectionCollectionState,
  createDefaultSelectionCollectionState,
} from './selected-collection.state.model';

export const selectedCollectionReducer = (
  state: SelectionCollectionState = createDefaultSelectionCollectionState(),
  action: ActionBase
): SelectionCollectionState => {
  switch (action.type) {
    case actionIds.setVerbCollectionSelection:
      return action.payload;
  }

  return state;
};
