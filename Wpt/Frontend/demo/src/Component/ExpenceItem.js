import React from 'react'
import './ExpenceItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenceItem(props) {
    return (
        <div className="expence-item">
            <ExpenseDate date={props.date} />
            <div className="expence-item__desc">
                <h2>{props.title}</h2>
                <div className="expence-item__price">${props.price}</div>
            </div>
        </div>
    )
}   
export default ExpenceItem
