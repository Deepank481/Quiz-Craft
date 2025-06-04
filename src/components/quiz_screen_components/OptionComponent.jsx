function OptionComponent({ index, optionText, state, dispatch }) {
  return (
    <div className="answer-options" id="answer-options">
      <button
        className={`answer-btn ${
          state.optionSelected === optionText ? "selected" : ""
        }`}
        data-answer="a"
        onClick={() => {
          dispatch({
            type: "option-selected",
            payload: optionText,
          });
        }}
      >
        <span className="answer-letter">
          {index === 0 && "A"}
          {index === 1 && "B"}
          {index === 2 && "C"}
          {index === 3 && "D"}
        </span>
        <span className="answer-text">{optionText}</span>
      </button>
    </div>
  );
}

export default OptionComponent;
