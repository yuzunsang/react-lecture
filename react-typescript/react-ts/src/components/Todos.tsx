import Todo from "@/models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </ul>
  );
};

export default Todos;
