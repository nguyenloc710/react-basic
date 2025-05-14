import { useState } from "react";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState("LOC")

  const { addNewTodo } = props

  const handelClick = () => {
    console.log(">>> handelClick ", valueInput);
  }
  const handelOnChange = (event) => {
    setValueInput(event)
  }
  return (
    <div className="todo-new">
      <input type="text"
        onChange={(event) => handelOnChange(event.target.value)} />
      <button style={{ cursor: "pointer" }} onClick={handelClick}>Add</button>
      <div>My text input = {valueInput}</div>
    </div>
  );
}
export default TodoNew;
