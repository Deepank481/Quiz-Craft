import ReviewHeader from "./ReviewHeader";

function ReviewScreen({ state, dispatch }) {
  return (
    <div
      id="review-screen"
      className={`screen ${state.screenActive === "review" ? "active" : ""}`}
    >
      <div className="review-content">
        <ReviewHeader state={state} dispatch={dispatch} />
        <div className="review-questions" id="review-questions">
          <div className="review-question">
            <div className="review-question-header">
              <span className="question-number">
                Question {state.reviewQuestionNo + 1}
              </span>
              <span className="result-indicator correct">
                <i className="fas fa-check"></i>
                Correct
              </span>
            </div>
            <div className="review-question-text">
              {state.questions[state.reviewQuestionNo].question}
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

        <div className="review-actions">
          <div className="review-main-actions">
            <button id="restart-from-review-btn" className="btn btn-primary">
              <i className="fas fa-redo"></i>
              Take Another Quiz
            </button>
            <button id="back-to-results-btn" className="btn btn-outline">
              <i className="fas fa-arrow-left"></i>
              Back to Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewScreen;
