import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoTitle from "./components/todo/TodoTitle";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learning React"
    }, {
      id: 2,
      name: "Youtube React"
    }
  ])


  const hoidanit = "LOC";
  const age = 25;
  const data = {
    address: "ha noi",
    contruy: "viet nam"
  }
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img className="logo" src={reactLogo} alt="" />
      </div>
    </div>
  );
}

export default App;
