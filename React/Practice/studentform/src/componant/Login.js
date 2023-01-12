import './Login.css';
import React from 'react'

function Login() {
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td><lable>PRN : </lable></td>
                        <td><input type="number" name="prn" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Password : </lable></td>
                        <td><input type="password" name="password" ></input></td>
                    </tr>
                </table>
                <input type="submit" value="submit" ></input>
            </form>
        </div>
    )
}

export default Login
