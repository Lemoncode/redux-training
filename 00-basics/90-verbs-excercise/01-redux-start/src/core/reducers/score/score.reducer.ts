import { ScoreState, createDefaultScore } from './score.state.model';
import { actionIds } from '../action-ids';
import { ActionBase } from 'core/base';

export const ScoreReducer = (
  state: ScoreState = createDefaultScore(),
  action: ActionBase
) => {
  switch (action.type) {
    case actionIds.resetScore:
      return { ...state, correctQuestions: 0 };
    case actionIds.scoreAddCorrectResponse:
      return { ...state, correctQuestions: state.correctQuestions + 1 };
  }
  return state;
};
