export const TodoList = ({ todos, setTodos }) => {
  const flipComplete = todo => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos([...newTodos, { ...todo, complete: !todo.complete }]);
  };

  const deleteTodo = todo => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <div style={{ width: "100%" }}>
      {todos && todos.length > 0 ? (
        todos
          .sort((a, b) => a.id - b.id)
          .map((todo, key) => (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: key % 2 === 0 && "#f3f3f3",
                padding: "1rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <p>{todo.complete ? "Complete" : "Not Complete"}</p>
                <p>{todo.name}</p>
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <button onClick={() => flipComplete(todo)}>
                  {todo.complete ? "Set Incomplete" : "Set Complete"}
                </button>
                <button onClick={() => deleteTodo(todo)}>Delete</button>
              </div>
            </div>
          ))
      ) : (
        <div>No todos, add a new one!</div>
      )}
    </div>
  );
};
