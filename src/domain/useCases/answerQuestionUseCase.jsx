const answerQuestionUseCase = (questions, currentQuestion, answer) => {
  const isCorrect = questions[currentQuestion].answer === answer;
  return isCorrect;
};

export default answerQuestionUseCase;
