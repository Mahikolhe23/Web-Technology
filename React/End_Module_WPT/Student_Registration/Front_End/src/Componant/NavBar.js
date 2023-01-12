import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div>
            <h1>Welcome To Student Registration Portal</h1>
            <Link to="/home"><button>Home</button></Link> &nbsp;&nbsp;
            {/* <Link to="/details"><button>Details</button></Link>&nbsp;&nbsp;&nbsp;
            <Link to="/login"><button>LOGIN</button></Link> */}
        </div>
    )
}

export default NavBar
