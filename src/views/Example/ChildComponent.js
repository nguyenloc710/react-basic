import React from "react";

class ChildComponent extends React.Component {
    /**
     * JSX return a block
     * Fragment : Giúp trả về 2 thẻ div
     * @returns 
     */
    state = {
        firstName: '',
        lastName: ''
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
        console.log('>>> can render: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, arrJobs } = this.props;
        let a = '';
        return (
            <>
                <div className="job-list">
                    {
                        a = arrJobs.map((item, index) => {
                            return (<div key={item.id}>
                                {item.title} - {item.salary}
                            </div>)
                        })
                    }
                    {console.log('>>> Check map array: ', a)}
                </div>
            </>
        )
    }
}

export default ChildComponent;