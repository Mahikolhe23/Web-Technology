import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Student Registration Portal</h1>
            <div>
                <Link to="/"><button type='button'>Home</button></Link>
                <Link to="/registration"><button type='button'>Register</button></Link>
                <Link to="/login"><button type='button'>Login</button></Link>
                <Link to="/display"><button type='button'>Display</button></Link>
            </div>
        </div>
    )
}

export default Home
