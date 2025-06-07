function ResultAction({ dispatch }) {
  return (
    <div className="results-actions">
      {/* <button
        id="review-answers-btn"
        className="btn btn-outline"
        onClick={() => dispatch({ type: "change-screen", payload: "review" })}
      >
        <i className="fas fa-eye"></i>
        Review Answers
      </button> */}
      <button
        id="restart-quiz-btn"
        className="btn btn-primary"
        onClick={() => dispatch({ type: "reset" })}
      >
        <i className="fas fa-redo"></i>
        Take Another Quiz
      </button>
    </div>
  );
}

export default ResultAction;
