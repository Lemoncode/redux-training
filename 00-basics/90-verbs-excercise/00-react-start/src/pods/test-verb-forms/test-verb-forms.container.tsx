import * as React from 'react';
import { TestVerbFormComponent } from './test-verb-forms.component';
import { Verb, VerbQuiz } from './test-verb-forms.vm';
import { globalVerbsContext } from 'core/verbs';
import { pickRandomVerb } from './test-verb-forms.business';

// TODO: Move to const this could be configured maybe in profile context
const totalQuestions = 20;

export const TestVerbFormContainer = () => {
  const context = React.useContext(globalVerbsContext);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [currentVerb, setCurrentVerb] = React.useState<Verb>({
    infinitive: '',
    participle: '',
    past: '',
    translation: '',
  });


  React.useEffect(() => {
    // TODO:: if we havent' reached the top calculate new question
    if (currentQuestion !== totalQuestions) {
      const randomVerb = pickRandomVerb(
        context.selectedVerbs,
        context.verbCollection
      );
      setCurrentVerb(randomVerb);
    }
  }, [currentQuestion]);

  const handleSetNextQuestion = () => {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <TestVerbFormComponent
      currentQuestion={currentQuestion}
      totalQuestion={totalQuestions}
      onNextQuestion={handleSetNextQuestion}
      verb={currentVerb}
    />
  );
};
