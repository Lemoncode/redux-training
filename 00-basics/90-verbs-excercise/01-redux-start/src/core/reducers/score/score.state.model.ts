export type ScoreState = {
  totalQuestions: number;
  correctQuestions: number;
};

export const createDefaultScore = () => ({
  totalQuestions: 5,
  correctQuestions: 0,
});
