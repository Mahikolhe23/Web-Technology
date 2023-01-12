function Registration() {
    return (
        <div >
            <h1>Student Registration Form</h1>
            <form > 
                <table>
                    <tr>
                        <td><lable>PRN : </lable></td>
                        <td><input type="number" name="prn" ></input></td>
                    </tr>
                    <tr>
                        <td><lable>Password :</lable></td>
                        <td><input type="password" name="password"></input></td>
                    </tr>
                    <tr>
                        <td><lable>Confirm Password :</lable></td>
                        <td><input type="password" name="Cpassword"></input></td>
                    </tr>
                </table>
                <input type="submit" value="submit" ></input>
            </form>
        </div>
    )
}
export default Registration;