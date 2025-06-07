function ResultSummary({ correctQuestion, totalQuestion }) {
  const percent = (correctQuestion / totalQuestion) * 100;
  return (
    <div className="results-header">
      <div className="score-circle">
        <div className="score-value" id="final-score">
          {correctQuestion}/{totalQuestion}
        </div>
        <div className="score-percentage" id="score-percentage">
          {Number.isNaN(percent) ? "" : percent}
        </div>
      </div>
      <h2 id="performance-message">Quiz Result</h2>
      <div className="achievement-badge" id="achievement-badge">
        <span>
          {percent === 0 && "💤 Sleeper"}
          {percent >= 1 && percent <= 29 && "🐣 Newbie"}
          {percent >= 30 && percent <= 49 && "🛠️ Apprentice"}
          {percent >= 50 && percent <= 59 && "🔍 Fact Finder"}
          {percent >= 60 && percent <= 69 && "📚 Knowledge Seeker"}
          {percent >= 70 && percent <= 79 && "🧩 Trivia Expert"}
          {percent >= 80 && percent <= 89 && "👑 Quiz Master"}
          {percent >= 90 && percent <= 100 && "🧠 Quiz Legend"}
        </span>
      </div>
    </div>
  );
}

export default ResultSummary;
