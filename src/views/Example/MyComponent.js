import React from "react";
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    /**
     * JSX return a block
     * Fragment : Giúp trả về 2 thẻ div
     * @returns 
     */
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500 $'},
            {id: 'abcJob2', title: 'Tester', salary: '1500 $'},
            {id: 'abcJob3', title: 'Project', salary: '5100 $'}
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> Check data input: ', this.state)
    }
    render() {
        console.log('>>> can render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(evnet) => this.handleChangeFirstName(evnet)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(evnet) => this.handleChangeLastName(evnet)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent 
                    name={this.state.firstName}
                    age={this.state.lastName}
                    arrJobs={this.state.arrJobs}/>
                {/* <ChildComponent 
                    name={'2'}/>
                <ChildComponent 
                    name={'3'}/> */}
            </>
        )
    }
}

export default MyComponent;