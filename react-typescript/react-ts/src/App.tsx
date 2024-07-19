import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleCreateNewTodo = (newItem: string) => {
    setTodos((prevTodos) => [...prevTodos, new Todo(newItem)]);
  };

  return (
    <div>
      <NewTodo onCreateTodo={handleCreateNewTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
