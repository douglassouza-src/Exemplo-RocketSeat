const startQuizUseCase = (
  setQuizStarted,
  setCurrentQuestion,
  setScore,
  setQuizCompleted
) => {
  setQuizStarted(true);
  setCurrentQuestion(0);
  setScore(0);
  setQuizCompleted(false);
};

export default startQuizUseCase;
