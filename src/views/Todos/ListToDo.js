import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Play Game' },
            { id: 'todo3', title: 'Go Home' },
        ],
        editToDo: {}
    }

    addNewToDo = (todo) => {
        let currentListToDo = this.state.listTodos
        currentListToDo.push(todo)
        this.setState({
            // listTodos: [...this.state.listTodos, todo]
            listTodos: currentListToDo
        })

        toast.success("Wow so easy!")
    }

    deleteToDo = (todo) => {
        console.log('>>> todo: ', todo)
        let currentListToDo = this.state.listTodos
        currentListToDo = currentListToDo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentListToDo
        })
        toast.success('delete done')
    }

    handleEditTodo = (todo) => {
        let { editToDo, listTodos } = this.state;
        let isEmptyObject = Object.keys(editToDo).length === 0;
        //Save
        if (isEmptyObject === false && editToDo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((obj => obj.id = todo.id))
            listTodosCopy[objIndex].title = editToDo.title
            this.setState({
                listTodos: listTodosCopy,
                editToDo: {}
            })
            toast.success("Update Todo Succeed")
            return;
        }
        //Edit
        this.setState({
            editToDo: todo
        })

    }

    handleOnChangeEditTodo = (event) => {

        let editToDoCopy = { ...this.state.editToDo }
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })
    }

    render() {
        let { listTodos, editToDo } = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObject = Object.keys(editToDo).length === 0;
        console.log('Check isEmptyObject: ', isEmptyObject)
        return (
            <>
                <p>
                    Todo App
                </p>
                <div className="list-todo-container">
                    <AddToDo addNewToDo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObject === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>{index + 1} - <input value={editToDo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    /></span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObject === false && editToDo.id === item.id ? 'Save' : 'Edit'}</button>
                                        <button className="delete"
                                            onClick={() => this.deleteToDo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>

        )
    }
}

export default ListToDo;