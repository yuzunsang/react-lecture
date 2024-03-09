import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); // change이벤트 감지 - DOM 요소 변경
  const [enteredPlayerName, setEnteredPlayerName] = useState(null); // onClick이벤트 시 리렌더링 - UI 변경

  function handleClick() {
    setEnteredPlayerName(playerName.current.value); // 참조한 value값을 기반 => state변경
    playerName.current.value = ""; // ref값 초기화, 즉 input의 value를 초기화함.
  }

  return (
    <section id="player">
      {/* ?? 는 "null 병합 연산자"로서 후자의 값이 null이나 undefined인 경우 전자를 반환, 그 외에는 후자를 반환함 */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
