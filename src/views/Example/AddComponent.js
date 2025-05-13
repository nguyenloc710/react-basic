import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> Check data input: ', this.state)
        if(!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label><br />
                    <input type="text" value={this.state.title} onChange={(evnet) => this.handleChangeFirstName(evnet)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(evnet) => this.handleChangeLastName(evnet)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;