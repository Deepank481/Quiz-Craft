function Category({ catName, totalQuestion, correctQuestion }) {
  return (
    <div className="category-result">
      <span className="category-name">{catName}</span>
      <div className="category-score">
        <div className="score-bar">
          <div
            className="score-fill"
            style={{ width: (correctQuestion / totalQuestion) * 100 + "%" }}
          ></div>
        </div>
        <span className="score-text">
          {correctQuestion}/{totalQuestion}
        </span>
      </div>
    </div>
  );
}

export default Category;
