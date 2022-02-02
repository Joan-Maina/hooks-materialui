import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Photos from "./components/Photos";
import Todos from "./components/Todos";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const [photos] = useFetch("https://jsonplaceholder.typicode.com/photos");

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="App">
      <h1>Hooks</h1>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/todos"
            element={<Todos addTodo={addTodo} todos={todos} />}
          />

          <Route exact path="/" element={<Photos photos={photos} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
