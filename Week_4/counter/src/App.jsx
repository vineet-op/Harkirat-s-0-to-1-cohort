import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go Home",
      description: "abc",
      completed: "false",
    },
    {
      title: "Go Gym",
      description: "abc",
      completed: false,
    },
  ]);

  function AddTodo() {
    setTodos([
      ...todos,
      { title: "Hello", description: "zty", completedt: true },
    ]);
  }
  return (
    <div>
      <button onClick={AddTodo}>Add Todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

//*Componenet
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.completed}</h1>
    </div>
  );
}
export default App;
