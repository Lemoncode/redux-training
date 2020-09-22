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
  return (
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
      <span>{verb.infinitive}</span>

      <Button onClick={onNextQuestion} variant="contained" color="primary">
        Next verb
      </Button>
    </div>
  );
};
