import React from 'react'
function Register() {
    return (
        <div>
            <form>
                <h3>Register</h3>
                <table style={{ textAlign: "left" }}>
                    <tr>
                        <td><lable>Roll No : </lable></td>
                        <td><input type="number" name="rollno" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Name : </lable></td>
                        <td><input type="text" name="name" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Cource : </lable></td>
                        <td><input type="text" name="cource" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>DOA : </lable></td>
                        <td style={{ textAlign: "left" }}><input type="date" name="date" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Mobile : </lable></td>
                        <td><input type="number" name="Mobile" ></input></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="submit"></input></td>
                        <td><input type="reset" value="cancel"></input></td>
                    </tr>
                </table>
            </form>

        </div >
    )
}

export default Register
