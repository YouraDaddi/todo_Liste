import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text !== "") {
      const newTodo = {
        id: todos.length > 0 ? todos[0].id + 1 : 1,
        text: text.charAt(0).toUpperCase() + text.slice(1),
        completed: false,
      };
  
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
    }
  };
  
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const modifier = (e, id) => {
    
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = e.charAt(0).toUpperCase() + e.slice(1);
        todo.completed=false;
      }
      return todo;
      
    });
    setTodos(updatedTodos);
  };

  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            completTodo={completTodo}
            key={todo.id}
            modifier={modifier}
          />
        );
      })}
    </div>
  );
}

export default App;
