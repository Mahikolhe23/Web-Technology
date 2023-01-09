import React, { Component } from 'react'
class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hi Good Morning'
        }
        this.clickHander = this.clickHander.bind(this)
    }
    // clickHander() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     // console.log(this.message)
    // }
    clickHander = () => {
        this.setState({
            message:'Good Bye'
        })

    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHander.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHander()}>Click</button> */}
                <button onClick={this.clickHander}>Click</button>
            </div>
        )
    }
}

export default EventBind

