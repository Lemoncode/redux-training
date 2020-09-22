import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Verb, VerbQuiz, createDefaultVerbQuiz } from './test-verb-forms.vm';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { answerIsCorrect } from './test-verb-forms.business';
import { ShowResults } from './components';

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
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const [initialQuiz, setInitialQuiz] = React.useState<VerbQuiz>(
    createDefaultVerbQuiz()
  );

  const handleValidateAnswer = (values: VerbQuiz) => {
    setIsCorrect(answerIsCorrect(verb, values));
    setValidated(true);
  };

  const internalHandleOnNextQuestion = () => {
    setInitialQuiz(createDefaultVerbQuiz());
    setValidated(false);
    onNextQuestion();
  };

  return (
    <div>
      <h1>Question {`${currentQuestion} / ${totalQuestions}`}</h1>
      <Formik
        onSubmit={(values, actions) => {
          handleValidateAnswer(values);
          actions.resetForm({ values: createDefaultVerbQuiz() });
        }}
        initialValues={initialQuiz}
      >
        {() => (
          <Form>
            <div>
              <span>{verb.infinitive}</span>
              <TextFieldComponent name="past" label="Past" />
              <TextFieldComponent name="participle" label="Participle" />
              <TextFieldComponent name="translation" label="Translation" />
            </div>

            {validated ? (
              <>
                <ShowResults succeeded={isCorrect} verb={verb} />

                <Button
                  onClick={internalHandleOnNextQuestion}
                  variant="contained"
                  color="primary"
                >
                  Next verb
                </Button>
              </>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Validate
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
