export const TodoList = ({ todos }) => {
  return (
    <div style={{ width: "100%" }}>
      {todos.map((todo, key) => (
        <div
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
