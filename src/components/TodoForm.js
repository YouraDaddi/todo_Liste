import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ne refreche pas la page a case de onsumit
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="toso-form">
      <input
        value={input} // so that apre avoir ajoute a task la barre est clean
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Task..."
      ></input>
      <button type="submit" className="todo-button">
        Add todo
      </button>
    </form>
  );
}
