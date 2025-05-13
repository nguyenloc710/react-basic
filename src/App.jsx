import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoTitle from "./components/todo/TodoTitle";
import reactLogo from "./assets/react.svg";
function App() {
  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoNew />
      <TodoData />
      <div className="todo-image">
        <img className="logo" src={reactLogo} alt="" />
      </div>
    </div>
  );
}

export default App;
