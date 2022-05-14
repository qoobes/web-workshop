export const TodoList = ({ todos, setTodos }) => {
  const flipComplete = todo => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos([...newTodos, { ...todo, complete: !todo.complete }]);
  };

  return (
    <div style={{ width: "100%" }}>
      {todos
        .sort((a, b) => a.id - b.id)
        .map((todo, key) => (
          <div
            onClick={() => flipComplete(todo)}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              backgroundColor: key % 2 === 0 && "#f3f3f3",
              padding: "1rem",
            }}
          >
            <p>{todo.complete ? "Complete" : "Not Complete"}</p>
            <p>{todo.name}</p>
          </div>
        ))}
    </div>
  );
};
