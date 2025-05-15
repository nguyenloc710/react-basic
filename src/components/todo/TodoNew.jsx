import { useState } from "react";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState("LOC")

  const { addNewTodo } = props

  const handelClick = () => {
    addNewTodo(valueInput)
    setValueInput("")
  }
  const handelOnChange = (name) => {
    setValueInput(name)
  }
  return (
    <div className="todo-new">
      <input 
      type="text"
        onChange={(event) => handelOnChange(event.target.value)}
        value={valueInput} 
        />
      <button style={{ cursor: "pointer" }} onClick={handelClick}>Add</button>
      <div>My text input = {valueInput}</div>
    </div>
  );
}
export default TodoNew;
