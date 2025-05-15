import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import TodoTitle from "./TodoTitle";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    console.log(">>>>>", id);
    setTodoList(newTodo)
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (<div className="todo-container">
    <TodoTitle />
    <TodoNew
      addNewTodo={addNewTodo}
    />
    {todoList.length > 0 ?
      <TodoData
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
      : <div className="todo-image">
        <img className="logo" src={reactLogo} alt="" />
      </div>}
  </div>)
}

export default TodoApp;