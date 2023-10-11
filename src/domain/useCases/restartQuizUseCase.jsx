const restartQuizUseCase = (
  setCurrentQuestion,
  setScore,
  setQuizCompleted,
  setUserName,
  setQuizStarted,
  onRequestClose
) => {
  setCurrentQuestion(0);
  setScore(0);
  setQuizCompleted(false);
  setUserName("");
  setQuizStarted(false);
  onRequestClose();
};

export default restartQuizUseCase;
