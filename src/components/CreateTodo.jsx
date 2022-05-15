import { useRef } from "react";

export const CreateTodo = ({ todos, setTodos }) => {
  const nameRef = useRef(null);

  const handleSubmit = () => {
    const name = nameRef.current.value;

    if (!name || name.length < 2) return alert("Please enter a name");

    setTodos([...todos, { name, complete: false, id: todos.length + 2 }]);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Form */}
      {/* Name of the todo */}

      <input
        style={{
          padding: "5px 5px",
          fontSize: "1.1rem",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid grey",
          boxShadow: "0px 2px 5px 0px grey",
        }}
        type="text"
        name="name"
        ref={nameRef}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "5px 5px",
          fontSize: "1.1rem",
          borderRadius: "5px",
          outline: "none",
          border: "1px solid grey",
          boxShadow: "0px 2px 5px 0px grey",
          cursor: "pointer",
        }}
      >
        Add new todo
      </button>
    </div>
  );
};
