export function generateRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxCeiled = Math.floor(max);
  return Math.floor(Math.random() * (maxCeiled - minCeiled + 1) + minCeiled);
}

export function startTimer(dispatch) {
  return setInterval(function () {
    dispatch({ type: "dec-timer" });
  }, 1000);
}
