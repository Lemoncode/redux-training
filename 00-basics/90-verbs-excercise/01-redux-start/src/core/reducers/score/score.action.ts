import { ActionBase } from '../../base';
import { actionIds } from '../action-ids';

export const resetScore = (): ActionBase => ({
  type: actionIds.resetScore,
});

export const AddCorrectResponseToScore = (
): ActionBase => ({
  type: actionIds.scoreAddCorrectResponse,
});
