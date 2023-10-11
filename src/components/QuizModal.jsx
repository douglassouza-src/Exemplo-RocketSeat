import React, { useState } from "react";
import Modal from "react-modal";
import "../index";

const questions = [
  { text: "Edge computing é uma tecnologia recente.", answer: false },
  {
    text: "Edge computing envolve processamento de dados na nuvem.",
    answer: false,
  },
  {
    text: "Edge computing é útil para reduzir a latência em aplicações.",
    answer: true,
  },
  {
    text: "Edge computing é apenas aplicável a dispositivos móveis.",
    answer: false,
  },
  // Adicione mais perguntas aqui
];

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    inset: "0",
    backgroundColor: "#f84802",
    padding: "10px",
    borderRadius: "15px",
    border: "black",
    width: "350px",
    minHeight: "180px",
    textAlign: "center",
    fontSize: "1rem",
    boxShadow: "0px 1px 5px rgba(255, 115, 0, 0.77)",
  },
};

const QuizModal = ({ isOpen, onRequestClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    if (questions[currentQuestion].answer === answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    if (userName.trim() !== "") {
      setQuizStarted(true);
      setCurrentQuestion(0);
      setScore(0);
      setQuizCompleted(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setUserName("");
    setQuizStarted(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Quiz sobre Edge Computing"
      style={modalStyles}
    >
      {quizCompleted ? (
        <div>
          <h2 style={{ color: "#070707" }}>Quiz completado, {userName}!</h2>
          <p style={{ color: "#060606", fontSize: "24px" }}>
            Você Acertou: {score}/{questions.length}
          </p>
          <button
            onClick={handleRestartQuiz}
            style={{
              backgroundColor: "#0a0909",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Reiniciar Quiz
          </button>
        </div>
      ) : (
        <>
          {!quizStarted ? (
            <div>
              <h2 style={{ color: "#050505" }}>
                Bem-vindo(a) ao nosso QUIZ sobre EDGE COMPUTING!
              </h2>
              <input
                type="text"
                placeholder="Por favor, digite seu nome para começarmos..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: "90%",
                  padding: "5px",
                  borderRadius: "5px",
                  borderColor: "#f66300",
                  backgroundColor: "black",
                  color: "white",
                  outlineColor: "black",
                  fontSize: "0.9rem",
                }}
              />
              <button
                onClick={handleStartQuiz}
                style={{
                  backgroundColor: "#111110",
                  color: "white",
                  padding: "10px",
                  width: "90%",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                INICIAR
              </button>
            </div>
          ) : (
            <>
              <p
                style={{
                  background: "#f3652b",
                  color: "#0b0b0b",
                  borderRadius: "5px",
                  fontSize: "1.3rem",
                  margin: "1px",
                }}
              >
                Pergunta: {currentQuestion + 1}/{questions.length}
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "1.3rem",
                  padding: "20px",
                  fontWeight: "bold",
                }}
              >
                {questions[currentQuestion].text}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => handleAnswer(true)}
                  style={{
                    backgroundColor: "#00f708",
                    color: "black",
                    fontSize: "1rem",
                    width: "48%",
                    padding: "10px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Verdadeiro
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  style={{
                    backgroundColor: "#ff0000",
                    color: "black",
                    fontSize: "1rem",
                    width: "48%",
                    padding: "10px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Falso
                </button>
              </div>
            </>
          )}
        </>
      )}
    </Modal>
  );
};

export default QuizModal;
