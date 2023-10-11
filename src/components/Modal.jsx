import React, { useState } from "react";
import QuizModal from "./QuizModal";
import "../index";

function Modal() {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const openQuizModal = () => {
    setIsQuizModalOpen(true);
  };

  const closeQuizModal = () => {
    setIsQuizModalOpen(false);
  };

  return (
    <div>
      <button onClick={openQuizModal} className="open-quiz-button">
        TESTAR OS MEUS CONHECIMENTOS
      </button>

      <QuizModal isOpen={isQuizModalOpen} onRequestClose={closeQuizModal} />
    </div>
  );
}

export default Modal;
