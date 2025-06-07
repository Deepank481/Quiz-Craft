import Category from "./Category";

function ResultCategory({ state }) {
  return (
    <div className="results-breakdown">
      <h3>Performance Breakdown</h3>
      <div className="category-results" id="category-results">
        {[...state.scoreDetails.keys()].map((key, i) => (
          <Category
            catName={key}
            totalQuestion={state.scoreDetails.get(key)[0]}
            correctQuestion={state.scoreDetails.get(key)[1]}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultCategory;
