const myMap = new Map();
export const initialState = {
  questions: [],
  screenActive: "home",
  isDataLoaded: false,
  questionNo: 0,
  isQuizStarted: false,
  reviewQuestionNo: 0,
  optionSelected: "",
  isOptionSelected: false,
  score: 0,
  scoreDetails: myMap,
};
export function reducerFunction(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "change-screen":
      state = { ...state, screenActive: payload };
      break;
    case "data-status":
      state = { ...state, isDataLoaded: payload };
      break;
    case "data":
      state = { ...state, questions: payload };
      break;
    case "option-selected":
      state = { ...state, optionSelected: payload, isOptionSelected: true };
      break;
    case "next-ques":
      state = {
        ...state,
        score:
          state.questions[state.questionNo].correct_answer ===
          state.optionSelected
            ? state.score + 10
            : state.score - 5,
        questionNo:
          state.questions.length > state.questionNo && state.questionNo >= 0
            ? state.questionNo + 1
            : state.questionNo,
        optionSelected: "",
        isOptionSelected: false,
        screenActive:
          state.questionNo + 1 === state.questions.length
            ? "result"
            : state.screenActive,
        scoreDetails: state.scoreDetails.has(
          state.questions[state.questionNo].category
        )
          ? state.scoreDetails.set(state.questions[state.questionNo].category, [
              state.scoreDetails.get(
                state.questions[state.questionNo].category
              )[0] + 1,
              state.questions[state.questionNo].correct_answer ===
              state.optionSelected
                ? state.scoreDetails.get(
                    state.questions[state.questionNo].category
                  )[1] + 1
                : state.scoreDetails.get(
                    state.questions[state.questionNo].category
                  )[1],
            ])
          : state.scoreDetails.set(state.questions[state.questionNo].category, [
              1,
              state.questions[state.questionNo].correct_answer ===
              state.optionSelected
                ? 1
                : 0,
            ]),
        isQuizStarted: !(state.questionNo + 1 === state.questions.length),
      };
      break;
    case "next-review-question":
      state = { ...state, reviewQuestionNo: state.reviewQuestionNo + 1 };
      break;
    case "reset":
      state = { ...initialState, scoreDetails: new Map() };
      break;
    case "quiz-started":
      state = { ...state, isQuizStarted: payload };
      break;
  }
  console.log(state);
  return state;
}
