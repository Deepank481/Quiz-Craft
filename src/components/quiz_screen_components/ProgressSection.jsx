function ProgressSection({ state, dispatch, quizTime }) {
  return (
    <div className="progress-section">
      <div className="progress-info">
        <span className="question-counter">
          Question <span id="current-question">{state.questionNo + 1}</span> of
          <span id="total-questions"> {state.questions.length}</span>
        </span>
        <div className="timer">
          <i className="fas fa-clock"></i>
          <span id="time-remaining">{quizTime}</span>s
        </div>
      </div>
      <div
        className="progress-bar"
        style={{
          width:
            (quizTime / (Math.ceil(state.questions.length / 2) * 60)) * 100 +
            "%",
        }}
      >
        <div className="progress-fill" id="progress-fill"></div>
      </div>
    </div>
  );
}

export default ProgressSection;
