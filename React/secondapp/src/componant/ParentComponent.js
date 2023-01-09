import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentname: 'Parent'
        }
        this.getparent = this.getparent.bind(this)
    }
    getparent(childName) {
        alert(`Hello  ${this.state.parentname} from ${childName}`)
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.getparent}>Click</button> */}
                <ChildComponent clickHandler={this.getparent}></ChildComponent>
            </div>
        )
    }
}
export default ParentComponent

