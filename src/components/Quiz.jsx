import { useState } from "react";

import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
  const shuffledAnswers = [...QUESTIONS[1].answers];
  shuffleArray(shuffledAnswers);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
