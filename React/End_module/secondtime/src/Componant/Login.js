import React from 'react'
function Login() {
    return (
        <div>
            <form>
                <table style={{ textAlign: "left" }}>
                    <tr>
                        <td><lable>PRN : </lable></td>
                        <td><input type="number" name="prn" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Password : </lable></td>
                        <td><input type="password" name="password" ></input></td>
                    </tr>
                    <input type="submit" value="submit" ></input>
                </table>
            </form>
        </div>
    )
}

export default Login
