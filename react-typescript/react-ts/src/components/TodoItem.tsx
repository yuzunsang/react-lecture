import Todo from "@/models/todo";
import classes from "./TodoItem.module.css";

const TodoItem = ({ text }: Omit<Todo, "id">) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
