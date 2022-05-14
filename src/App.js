import { TodoList } from "./components/TodoList";

function App() {
  const Todos = [
    {
      name: "Learn React",
      complete: true,
    },
    {
      name: "Learn TypeScript",
      complete: true,
    },
  ];

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
      <TodoList todos={Todos} />
    </div>
  );
}

export default App;
