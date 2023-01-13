import React from 'react'
function Login() {
    return (
        <div>
            <h3>Login Page</h3>
            <form >
                <div>
                    <lable htmlFor="name">User Name : </lable>
                    <input type="text" name="name" id='name'></input>
                </div>
                <div>
                    <lable htmlFor="password">User Password : </lable>
                    <input type="password" name="password" id='password'></input>
                </div>
            </form>
        </div >
    )
}
export default Login
