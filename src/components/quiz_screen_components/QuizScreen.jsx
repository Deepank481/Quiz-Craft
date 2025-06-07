import { useEffect, useState } from "react";
import Loader from "../Loader";
import ProgressSection from "./ProgressSection";
import QuestionCard from "./QuestionCard";

function QuizScreen({ state, dispatch }) {
  const [quizTime, setQuizTime] = useState(0);
  useEffect(
    function () {
      if (state.isDataLoaded) {
        setQuizTime(() => Math.ceil(state.questions.length / 2) * 60);
      }
    },
    [state.isDataLoaded, state.questions.length]
  );
  useEffect(
    function () {
      let timer = null;
      if (state.isQuizStarted && quizTime >= 0) {
        timer = setInterval(function () {
          console.log("timer started");
          setQuizTime(() => quizTime - 1);
        }, 1000);
      } else {
        if (quizTime < 0) {
          dispatch({ type: "quiz-started", payload: false });
          dispatch({ type: "change-screen", payload: "result" });
        }
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    },
    [state.isQuizStarted, quizTime]
  );

  return state.screenActive === "quiz" ? (
    state.isDataLoaded ? (
      <div id="quiz-screen" className={`screen active`}>
        <ProgressSection
          state={state}
          dispatch={dispatch}
          quizTime={quizTime}
        />
        <QuestionCard state={state} dispatch={dispatch} />
      </div>
    ) : (
      <Loader state={state} />
    )
  ) : (
    ""
  );
}

export default QuizScreen;
