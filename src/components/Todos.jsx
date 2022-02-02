import React from "react";
import Button from "@material-ui/core/Button";

function Todos({ todos, addTodo }) {
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <Button onClick={() => addTodo()} variant="contained" color="secondary">
        Add to do
      </Button>{" "}
    </div>
  );
}

export default Todos;
