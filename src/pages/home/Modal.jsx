import React, { useState } from "react";
import QuizModal from "../../components/QuizModal";
import QuizIcon from "@mui/icons-material/Quiz";
import "../../index";

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
      <button
        onClick={openQuizModal}
        className="open-quiz-button"
        title="Testar Conhecimentos"
      >
        <div className="button-content">
          <QuizIcon />
          <span>Quiz</span>
        </div>
      </button>

      <QuizModal isOpen={isQuizModalOpen} onRequestClose={closeQuizModal} />
    </div>
  );
}

export default Modal;
