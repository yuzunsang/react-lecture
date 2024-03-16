import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  // input 필드를 useState로 => 양방향 바인딩
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    // input validation
    if (enteredTask.trim() === "") {
      return;
    }

    // enteredTask를 상위 컴포넌트인 App으로 보냄 => prop drilling
    onAdd(enteredTask);
    // 입력칸 reset
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
