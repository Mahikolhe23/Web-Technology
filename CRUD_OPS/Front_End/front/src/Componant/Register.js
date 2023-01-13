import React from 'react'
import { useState } from 'react'
import UserServices from './AxiosConnection';
function Register() {
    let [userObj, SetUserObj] = useState({ firstname: "", lastname: "", email: "", password: "", id: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        SetUserObj({ ...userObj, [name]: value });
    }
    const adduserData = () => {
        UserServices.addUser(userObj).then((result) => {
            console.log(result.data);
        })

    }
    return (
        <div>
            <h1>Register Page</h1>
            <form action='/' method='post'>
                <div>
                    <lable htmlFor="firstname">First Name : </lable>
                    <input type="text" name="firstname" id="firstname" onChange={handleChange} value={userObj.firstname}></input>
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name : </label>
                    <input type="text" name="lastname" id="lastname" value={userObj.lastname} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='emial'>Email ID : </label>
                    <input type="email" name='email' id='email' value={userObj.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id='password' value={userObj.password} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='id'>ID</label>
                    <input type="number" name="id" id='id' value={userObj.id} onChange={handleChange}></input>
                </div>
                <button type='submit' onClick={adduserData}>Subtmit</button>
            </form>
        </div >
    )
}

export default Register
