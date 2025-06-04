function ReviewScreen({ state }) {
  return (
    <div
      id="review-screen"
      className={`screen ${state.screenActive === "review" ? "active" : ""}`}
    >
      <div className="review-content">
        <div className="review-header">
          <h2>Answer Review</h2>
          <button id="close-review-btn" className="btn btn-ghost">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="review-questions" id="review-questions">
          <div className="review-question">
            <div className="review-question-header">
              <span className="question-number">Question 1</span>
              <span className="result-indicator correct">
                <i className="fas fa-check"></i>
                Correct
              </span>
            </div>
            <div className="review-question-text">
              What is the chemical symbol for gold?
            </div>
            <div className="review-answers">
              <div className="review-answer correct">
                <span className="answer-letter">A</span>
                <span className="answer-text">Au</span>
                <span className="answer-status">Your Answer</span>
              </div>
              <div className="review-answer">
                <span className="answer-letter">B</span>
                <span className="answer-text">Ag</span>
              </div>
            </div>
            <div className="review-explanation">
              <strong>Explanation:</strong> Au is the chemical symbol for gold,
              derived from the Latin word "aurum".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewScreen;
