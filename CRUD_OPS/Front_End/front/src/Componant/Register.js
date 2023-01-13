import React from 'react'
function Register() {
    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <div>
                    <lable htmlFor="fn">First Name : </lable>
                    <input type="text" name="fn" id="fn"></input>
                </div>
                <div>
                    <label htmlFor='ln'>Last Name : </label>
                    <input type="text" name="ln" id="ln"></input>
                </div>
                <div>
                    <label htmlFor='emial'>Email ID : </label>
                    <input type="email" name='email' id='email'></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id='password'></input>
                </div>
                <button type='submit'>Subtmit</button>
            </form>
        </div >
    )
}

export default Register
