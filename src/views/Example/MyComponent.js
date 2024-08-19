import React from "react";

class MyComponent extends React.Component {
    /**
     * JSX return a block
     * Fragment : Giúp trả về 2 thẻ div
     * @returns 
     */

    state = {
        name: 'BEST',
        channel: 'Hoi BEST'
    }

    handleOnChangeName = (event) => {
        console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }
    render() {
        let name = 'BEST'
        console.log('>>> can render: ', this.state)
        return (
            <>
                <div className="first">
                    {console.log('My name is :', name)}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    MyComponent SOS, My name is {this.state.name}
                </div>
                <div className="serond">
                    {console.log('My name is :', name)}
                    MyComponent youtube channel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;