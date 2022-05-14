import { useState } from "react";
import { TodoList } from "./components/TodoList";

const INITIAL_STATE = [
  {
    name: "Learn React",
    complete: true,
    id: 1,
  },
  {
    name: "Learn TypeScript",
    complete: true,
    id: 2,
  },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_STATE);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10rem",
        boxShadow: "0px 2px 10px 1px grey",
        borderRadius: "10px",
      }}
    >
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
