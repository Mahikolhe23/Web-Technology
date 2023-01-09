import React, { useState } from 'react'

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Enter Name:
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
            </label>
            <label>
                <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
            </label>
            <input type="submit" />
        </form>
    )






















    // const [name, setName] = useState("");
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`Name:  ${name}`);
    // }
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label>Enter Name:
    //             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //         </label>
    //         <input type="submit" />
    //     </form>
    // )
}

export default MyForm
