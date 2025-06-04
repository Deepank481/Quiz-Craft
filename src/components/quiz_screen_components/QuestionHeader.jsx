function QuestionHeader({ state, dispatch }) {
  return (
    <div className="question-header">
      <div className="question-category" id="question-category">
        {state.questions.length > 0
          ? state.questions[state.questionNo].category
          : ""}
      </div>
      <div className="question-difficulty" id="question-difficulty">
        {state.questions.length > 0
          ? state.questions[state.questionNo].difficulty
          : ""}
      </div>
    </div>
  );
}

export default QuestionHeader;
