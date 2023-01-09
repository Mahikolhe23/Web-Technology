import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            Message: 'welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            Message: 'Thanks for click'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Click</button>
            </div>
        )
    }
}
export default Message