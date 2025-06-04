import Loader from "../Loader";
import ProgressSection from "./ProgressSection";
import QuestionCard from "./QuestionCard";

function QuizScreen({ state, dispatch }) {
  return state.screenActive === "quiz" ? (
    state.isDataLoaded ? (
      <div id="quiz-screen" className={`screen active`}>
        <ProgressSection state={state} dispatch={dispatch} />
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
