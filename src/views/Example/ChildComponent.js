import React from "react";
import './Demo.css'
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    hanldeShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    hanldeOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditinoal: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button  onClick={() => this.hanldeShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (<div key={item.id}>
                                        {item.title} - {item.salary} <> </> <span onClick={() => this.hanldeOnClickDelete(item)}>x</span>
                                    </div>)

                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.hanldeShowHide()}>Hide</button>
                        </div>

                    </>}
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     let a = '';
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     a = arrJobs.map((item, index) => {
//                         return (<div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>)
//                     })
//                 }
//                 {console.log('>>> Check map array: ', a)}
//             </div>
//         </>)
// }

export default ChildComponent;