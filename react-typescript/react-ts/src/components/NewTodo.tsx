import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const { createTodo } = useContext(TodosContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (!enteredText.trim().length) {
      // throw new Error('Invalid');
      return;
    }

    createTodo(enteredText);
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
