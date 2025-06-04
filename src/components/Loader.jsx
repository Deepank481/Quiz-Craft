function Loader({ state }) {
  return (
    <div
      id="loading-overlay"
      className={`loading-overlay ${state.isDataLoaded ? "" : "active"}`}
    >
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Loading Questions...</p>
      </div>
    </div>
  );
}

export default Loader;
