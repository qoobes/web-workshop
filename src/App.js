import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "10rem",
          marginTop: "10rem",
          marginRight: "10rem",
          boxShadow: "0px 2px 10px 1px grey",
          borderRadius: "1rem",
        }}
      >
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div
        style={{
          marginLeft: "10rem",
          marginTop: "2rem",
        }}
      >
        <CreateTodo todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
