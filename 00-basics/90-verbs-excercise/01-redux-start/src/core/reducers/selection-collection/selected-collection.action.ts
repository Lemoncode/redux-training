import { ActionBase } from '../../base';
import { actionIds } from '../action-ids';

export const setVerbCollectionSelection = (
  selection: string[]
): ActionBase => ({
  type: actionIds.setVerbCollectionSelection,
  payload: selection,
});
