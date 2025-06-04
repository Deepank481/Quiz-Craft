function ProgressSection({ state, dispatch }) {
  return (
    <div className="progress-section">
      <div className="progress-info">
        <span className="question-counter">
          Question <span id="current-question">{state.questionNo + 1}</span> of
          <span id="total-questions"> {state.questions.length}</span>
        </span>
        <div className="timer">
          <i className="fas fa-clock"></i>
          <span id="time-remaining">30</span>s
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" id="progress-fill"></div>
      </div>
    </div>
  );
}

export default ProgressSection;
