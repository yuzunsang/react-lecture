import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    // 모달장을 open 과 같은 속성으로 강제로 보이게 했을 때에는 backdrop을 사용할 수 없다
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stoped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
