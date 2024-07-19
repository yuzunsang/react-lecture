import { useRef } from "react";
import classes from "./NewTodo.module.css";

type NewTodoProps = {
  onCreateTodo: (enteredText: string) => void;
};

const NewTodo = ({ onCreateTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (!enteredText.trim().length) {
      // throw new Error('Invalid');
      return;
    }

    onCreateTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add New Todo</button>
    </form>
  );
};

export default NewTodo;
