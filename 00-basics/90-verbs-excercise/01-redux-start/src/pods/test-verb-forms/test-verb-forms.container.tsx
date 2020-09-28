import * as React from 'react';
import { TestVerbFormComponent } from './test-verb-forms.component';
import { Verb, VerbQuiz } from './test-verb-forms.vm';
import { answerIsCorrect, pickRandomVerb } from './test-verb-forms.business';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { scoreContext } from 'core/score';
import { useDispatch, useSelector } from 'react-redux';
import {
  GlobalState,
  resetScore,
  AddCorrectResponseToScore,
} from 'core/reducers';

// TODO: Move to const this could be configured maybe in profile context

export const TestVerbFormContainer = () => {
  const history = useHistory();

  const verbCollection = useSelector(
    (state: GlobalState) => state.verbCollectionState
  );
  const selectedVerbs = useSelector(
    (state: GlobalState) => state.selectionCollectionState
  );

  const { correctQuestions, totalQuestions } = useSelector(
    (state: GlobalState) => state.scoreState
  );
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [currentVerb, setCurrentVerb] = React.useState<Verb>({
    infinitive: '',
    participle: '',
    past: '',
    translation: '',
  });

  const incrementScore = () => {
    dispatch(AddCorrectResponseToScore())
 }

  React.useEffect(() => {
    dispatch(resetScore());
  }, []);

  React.useEffect(() => {
    // TODO:: if we havent' reached the top calculate new question
    if (currentQuestion !== totalQuestions) {
      const randomVerb = pickRandomVerb(selectedVerbs, verbCollection);
      setCurrentVerb(randomVerb);
    }
  }, [currentQuestion]);

  const handleSetNextQuestion = () => {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      history.push(routes.finalScore);
    }
  };

  return (
    <TestVerbFormComponent
      currentQuestion={currentQuestion}
      totalQuestions={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      verb={currentVerb}
      score={correctQuestions}
      incrementScore={incrementScore}
    />
  );
};
