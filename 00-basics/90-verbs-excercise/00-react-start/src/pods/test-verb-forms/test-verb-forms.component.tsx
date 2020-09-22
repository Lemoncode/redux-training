import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Verb } from './test-verb-forms.vm';

// TODO: Move to const this could be configured maybe in profile context
const totalQuestions = 20;

interface Props {
  currentQuestion: number;
  totalQuestion: number;
  onNextQuestion: () => void;
  verb: Verb;
}

export const TestVerbFormComponent: React.FC<Props> = props => {
  const { currentQuestion, totalQuestion, onNextQuestion, verb } = props;
  const [validated, setValidated] = React.useState(false);

  const handleValidateAnswer = () => {
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setValidated(false);
    onNextQuestion();
  };

  return (
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
      <div>
        <span>{verb.infinitive}</span>
      </div>

      {validated ? (
        <Button
          onClick={internalHandleOnNextQuestion}
          variant="contained"
          color="primary"
        >
          Next verb
        </Button>
      ) : (
        <Button
          onClick={handleValidateAnswer}
          variant="contained"
          color="primary"
        >
          Validate
        </Button>
      )}
    </div>
  );
};
