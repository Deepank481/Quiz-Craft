import HomeScreenForm from "./HomeScreenForm";

function HomePageScreen({ state, dispatch }) {
  return (
    <div
      id="welcome-screen"
      className={`screen ${state.screenActive === "home" ? "active" : ""}`}
    >
      <div className="welcome-content">
        <div className="hero-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <h2>Ready to Test Your Expertise?</h2>
        <p>
          Challenge yourself with questions across multiple categories and
          difficulty levels
        </p>

        <HomeScreenForm state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default HomePageScreen;
