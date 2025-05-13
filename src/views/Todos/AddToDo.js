import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    hanldeOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    hanldeAddToDo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState(
            {
                title: ''
            }
        )
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.hanldeOnChangeTitle(event)} />
                <button type="button" className="add"
                    onClick={() => this.hanldeAddToDo()}
                >Add</button>
            </div>
        )
    }
}

export default AddToDo;