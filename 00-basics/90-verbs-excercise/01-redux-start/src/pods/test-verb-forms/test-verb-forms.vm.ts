export interface Verb {
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

export interface VerbQuiz {
  past: string;
  participle: string;
  translation: string;
}

export const createDefaultVerbQuiz = (): VerbQuiz => ({
  past: '',
  participle: '',
  translation: '',
});
