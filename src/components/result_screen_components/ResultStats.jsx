function ResultStats({ totalCorrect, totalQuestions }) {
  return (
    <div className="results-stats">
      <div className="stat-item">
        <div className="stat-value" id="correct-answers">
          {totalCorrect}
        </div>
        <div className="stat-label">Correct</div>
      </div>
      <div className="stat-item">
        <div className="stat-value" id="incorrect-answers">
          {totalQuestions - totalCorrect}
        </div>
        <div className="stat-label">Incorrect</div>
      </div>
      <div className="stat-item">
        <div className="stat-value" id="accuracy">
          {(totalCorrect / totalQuestions) * 100 !== Number.isNaN
            ? (totalCorrect / totalQuestions) * 100
            : ""}
          %
        </div>
        <div className="stat-label">Accuracy</div>
      </div>
    </div>
  );
}

export default ResultStats;
