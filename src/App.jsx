import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoTitle from "./components/todo/TodoTitle";
import reactLogo from "./assets/react.svg";
function App() {
  const hoidanit = "LOC";
  const age = 25;
  const data = {
    address: "ha noi",
    contruy: "viet nam"
  }
  const addNewTodo = (name) => {
    alert(`Call me ${name}`)
  }
  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoNew 
      addNewTodo={addNewTodo}
      />
      <TodoData 
      name = {hoidanit}
      age = {age}
      data = {data}
      />
      <div className="todo-image">
        <img className="logo" src={reactLogo} alt="" />
      </div>
    </div>
  );
}

export default App;
