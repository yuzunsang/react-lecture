import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge targetTime={1}>Easy</TimerChallenge>
        <TimerChallenge targetTime={5}>Not easy</TimerChallenge>
        <TimerChallenge targetTime={10}>Getting tough</TimerChallenge>
        <TimerChallenge targetTime={15}>Pros only</TimerChallenge>
      </div>
    </>
  );
}

export default App;
