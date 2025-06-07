function ReviewHeader({ state, dispatch }) {
  return (
    <div className="review-header">
      <h2>Answer Review</h2>
      <div className="review-nav">
        <span className="review-counter">
          Question <span id="review-current">{state.reviewQuestionNo + 1}</span>{" "}
          of <span id="review-total">{state.questions.length}</span>
        </span>
        <div className="review-nav-buttons">
          <button id="prev-review-btn" className="btn btn-ghost" disabled>
            <i className="fas fa-chevron-left"></i>
            Previous
          </button>
          <button
            id="next-review-btn"
            className="btn btn-ghost"
            onClick={() => dispatch({ type: "next-review-question" })}
          >
            Next
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader;
