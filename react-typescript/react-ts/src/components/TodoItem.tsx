import classes from "./TodoItem.module.css";

type Props = {
  text: string;
  onDeleteTodo: () => void;
};

const TodoItem = ({ text, onDeleteTodo }: Props) => {
  return (
    <li className={classes.item} onClick={onDeleteTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
