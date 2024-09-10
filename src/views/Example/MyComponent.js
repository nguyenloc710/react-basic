import React from "react";
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    /**
     * JSX return a block
     * Fragment : Giúp trả về 2 thẻ div
     * @returns 
     */
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '1500' },
            { id: 'abcJob3', title: 'Project', salary: '5100' }
        ]
    }

    addNewJob = (job) => {
       console.log('check job', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currenJob = this.state.arrJobs
        currenJob = currenJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJob
        })
    }

    render() {
        console.log('>>> can render: ', this.state)
        return (
            <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    name={this.state.firstName}
                    age={this.state.lastName}
                    arrJobs={this.state.arrJobs} 
                    deleteAJob={this.deleteAJob}
                    />
                {/* <ChildComponent 
                    name={'2'}/>
                <ChildComponent 
                    name={'3'}/> */}
            </>
        )
    }
}

export default MyComponent;