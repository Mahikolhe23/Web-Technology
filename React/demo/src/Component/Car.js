// import React, { Component } from 'react'
import React, { useState } from 'react';
// import React from 'react'

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Red"
    });
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}. </p>
            <button
                type='button'
                onClick={updateColor}>Blue</button>

        </div>
    )
}
export default Car






// //function component
// function Car(props) {
//     return (
//         <li>I am a {props.brand}</li>
//     )
// }
// function Garage() {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//         <div>
//             <h1>Who is in my Garage</h1>
//             <ul>
//                 {cars.map((car) => <Car brand={car} />)}
//             </ul>
//         </div>
//     )
// }
// export default Garage

//Class component
// class Car extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             brand: "Ford", model: "Mustang", color: "Red", year: 1994
//         }
//     };
//     changeColor = () => {
//         this.setState({ color: "Blue" });
//     }
//     render() {
//         return (
//             <div>
//                 <p>My {this.state.brand} It is a {this.state.model} {this.state.color} from {this.state.year}</p>
//                 <button type="button" onClick={this.changeColor}>change Color</button>
//             </div>
//         )
//     }
// }
// export default Car
