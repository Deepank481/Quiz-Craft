import { useState } from "react";
import { baseUrl } from "../../constant/constant";

function HomeScreenForm({ state, dispatch }) {
  const category = [
    "Any Category",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
  ];

  const [quizCategory, setCategory] = useState("Any Category");
  const [diffLevel, setDiffLevel] = useState("Any Difficulty");
  const [totalQuestions, setTotalQuestions] = useState("5");

  function handleStartQuiz() {
    async function fetchQuizQuestions(url) {
      dispatch({ type: "data-status", payload: false });
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "data", payload: data.results });
      dispatch({ type: "data-status", payload: true });
      dispatch({ type: "quiz-started", payload: true });
    }
    const urlToFetch = baseUrl + `amount=${totalQuestions}&type=multiple`;
    fetchQuizQuestions(urlToFetch);
    dispatch({ type: "change-screen", payload: "quiz" });
  }

  return (
    <>
      <div className="quiz-settings">
        <div className="setting-group">
          <label htmlFor="question-count">Number of Questions:</label>
          <select
            id="question-count"
            className="setting-select"
            value={totalQuestions}
            onChange={(e) => setTotalQuestions(() => e.target.value)}
          >
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={15}>15 Questions</option>
            <option value={20}>20 Questions</option>
            <option value={50}>50 Questions</option>
          </select>
        </div>
      </div>
      <button
        id="start-quiz-btn"
        className="btn btn-primary"
        onClick={handleStartQuiz}
      >
        <i className="fas fa-play"></i>
        Start Quiz
      </button>
    </>
  );
}

export default HomeScreenForm;
