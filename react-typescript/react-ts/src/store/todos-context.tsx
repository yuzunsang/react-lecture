import React, { useState } from "react";
import Todo from "../models/todo";

// context 목록의 타입 정의
type TodoContextState = {
  items: Todo[];
  createTodo: (newItem: string) => void;
  deleteTodo: (id: string) => void;
};

// context 초기값 셋팅
export const TodosContext = React.createContext<TodoContextState>({
  items: [],
  createTodo: () => {},
  deleteTodo: () => {},
});

// context의 action 정의 & Provider 리턴
const TodosContextProvider = ({ children }: { children: any }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleCreateNewTodo = (todoText: string) => {
    setTodos((prevTodos) => [...prevTodos, new Todo(todoText)]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextState = {
    items: todos,
    createTodo: handleCreateNewTodo,
    deleteTodo: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
