import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button"
import CounterComponent from "./components/CounterComponent";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <CounterComponent /> 
      <Header title = "Todoie App" />
      <TodoItem text="Eat"/>
      <TodoItem completed = {true} text="Sleep"/>
      <TodoItem text="Think"/>
      <TodoItem text="Code"/>
      <TodoItem text="Repeat"/>
      <Button />
    </div>
  );
};

export default App;