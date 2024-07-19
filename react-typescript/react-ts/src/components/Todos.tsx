import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const { items, deleteTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map(({ id, text }) => (
        <TodoItem
          key={id}
          text={text}
          onDeleteTodo={deleteTodo.bind(null, id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
