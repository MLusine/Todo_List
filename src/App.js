import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoItem todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
