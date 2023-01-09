import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.clickHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
