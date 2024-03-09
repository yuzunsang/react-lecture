import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

// let timer;

export default function TimerChallenge({ children, targetTime }) {
  const timer = useRef(); // ref 는 컴포넌트가 rerender되어도 유실되지 않음.
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // 언제나 current 속성을 target으로 해야 함.
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open(); // 외부 컴포넌트, 즉 ResultModal.jsx의 open 메소드를 참조
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{children}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive."}
        </p>
      </section>
    </>
  );
}
