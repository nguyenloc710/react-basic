const TodoData = (props) => {
  console.log(">>> Check props: ",props);
  const {age, name, data} = props
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div> Learning React</div>
      <div> Watching Youtube</div>
    </div>
  );
};

export default TodoData;
