import { useReducer } from "react";
import { initialState, reducerFunction } from "../state/AppState";
import Footer from "./Footer";
import Header from "./header";
import HomePageScreen from "./home_screen_components/HomePageScreen";
import QuizScreen from "./quiz_screen_components/QuizScreen";
import ResultScreen from "./result_screen_components/ResultScreen";
import ReviewScreen from "./review_screen_components/ReviewScreen";

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <Header appname={"QuizMaster Pro"} tagline={"Master Your Knowledge"} />
      <main className="main-container">
        <HomePageScreen state={state} dispatch={dispatch} />
        <QuizScreen state={state} dispatch={dispatch} />
        <ResultScreen state={state} dispatch={dispatch} />
      </main>
      <Footer />
    </>
  );
}

export default App;
