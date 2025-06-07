import { useState, useEffect } from "react";
import ResultCategory from "./ResultCategory";
import ResultStats from "./ResultStats";
import ResultSummary from "./ResultSummary";
import ResultAction from "./ResultAction";

function ResultScreen({ state, dispatch }) {
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  useEffect(
    function () {
      let temp = 0,
        temp2 = 0;
      for (const key of state.scoreDetails.keys()) {
        temp = temp + state.scoreDetails.get(key)[1];
        temp2 = temp2 + state.scoreDetails.get(key)[0];
      }
      setTotalCorrect(() => temp);
      setTotalQuestions(() => temp2);
    },
    [state.scoreDetails, state.score]
  );
  return (
    <div
      id="results-screen"
      className={`screen ${state.screenActive === "result" ? "active" : ""}`}
    >
      <div className="results-content">
        <ResultSummary
          correctQuestion={totalCorrect}
          totalQuestion={totalQuestions}
        />

        <ResultStats
          totalQuestions={totalQuestions}
          totalCorrect={totalCorrect}
        />

        <ResultCategory state={state} />
        <ResultAction dispatch={dispatch} />
      </div>
    </div>
  );
}

export default ResultScreen;
