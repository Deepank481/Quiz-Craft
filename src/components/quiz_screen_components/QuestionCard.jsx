import QuestionHeader from "./QuestionHeader";
import { generateRandom } from "../../constant/util";
import OptionComponent from "./OptionComponent";
import { useEffect, useState } from "react";

function QuestionCard({ state, dispatch }) {
  const [optionsState, setOptionsState] = useState([]);
  useEffect(
    function () {
      const correctAnswerIndex = generateRandom(0, 3);

      if (correctAnswerIndex > 2) {
        setOptionsState(() => [
          ...state.questions[state.questionNo].incorrect_answers,
          state.questions[state.questionNo].correct_answer,
        ]);
      } else {
        setOptionsState(() => [
          ...state.questions[state.questionNo].incorrect_answers.slice(
            0,
            correctAnswerIndex
          ),
          state.questions[state.questionNo].correct_answer,
          ...state.questions[state.questionNo].incorrect_answers.slice(
            correctAnswerIndex
          ),
        ]);
      }
    },
    [state.questionNo, state.questions]
  );

  console.log("Options Consolidated::" + optionsState);
  return (
    <div className="question-card">
      <QuestionHeader state={state} dispatch={dispatch} />
      <div className="question-content">
        <h3 id="question-text">
          {state.isDataLoaded ? state.questions[state.questionNo].question : ""}
        </h3>
      </div>

      {state.isDataLoaded
        ? optionsState.map((op, i) => (
            <OptionComponent
              index={i}
              optionText={op}
              key={i}
              state={state}
              dispatch={dispatch}
            />
          ))
        : ""}

      <button
        id="next-question-btn"
        className="btn btn-secondary"
        disabled={!state.isOptionSelected}
        onClick={() => {
          dispatch({ type: "next-ques" });
          // if (state.questionNo + 1 === state.questions.length) {
          //   dispatch({ type: "change-screen", payload: "result" });
          // }
        }}
      >
        {state.questions.length === state.questionNo + 1
          ? "Submit"
          : "Next Question"}
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default QuestionCard;
