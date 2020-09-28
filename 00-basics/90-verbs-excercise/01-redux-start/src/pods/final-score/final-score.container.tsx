import * as React from 'react';
import { FinalScoreComponent } from './final-score.component';
import { scoreContext } from 'core/score';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from 'core/reducers';

export const FinalScoreContainer = () => {
  const { totalQuestions, correctQuestions } = useSelector(
    (state: GlobalState) => state.scoreState
  );

  return (
    <FinalScoreComponent total={totalQuestions} correct={correctQuestions} />
  );
};
