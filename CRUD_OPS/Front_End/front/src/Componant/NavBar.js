import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div>
            <Link to="/"><button type='button'>Home</button></Link>
            <Link to="/registration"><button type='button'>Register</button></Link>
            <Link to="/login"><button type='button'>Login</button></Link>
            <Link to="/display"><button type='button'>Display</button></Link>
        </div>
    )
}

export default NavBar
