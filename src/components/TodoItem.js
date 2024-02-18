import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDownloadDone } from "react-icons/md";

export default function TodoItem({ todo, removeTodo, completTodo, modifier }) {
  const [modif, setModif] = useState(false);
  const [nvText, setNvText] = useState(todo.text);

  const FsetNvText = () => {
    todo.completed=false;
    modifier(nvText, todo.id);
    setModif(false);
  };

  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {modif ? (
        <div className="todo-row">
          <form onSubmit={FsetNvText} className="toso-form"></form>
          <input
            onChange={(e) => setNvText(e.target.value)}
            className="todo-input"
            placeholder={todo.text}
          ></input>
          <MdOutlineDownloadDone
            className="aah"
            type="submit"
            onClick={FsetNvText}
          />
        </div>
      ) : (
        <div className="partie2">
          <span id="span"> {todo.text}</span>
          <div className="iconContainer">
            <AiOutlineCloseCircle
              style={{ marginRight: "5" }}
              onClick={() => removeTodo(todo.id)}
            />
            <BiCheckCircle onClick={() => completTodo(todo.id)} />
            <BiSolidEdit
              style={{ marginLeft: "5" }}
              onClick={() => setModif(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
