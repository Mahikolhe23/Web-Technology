import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Details from "./Details";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";


const WebRouter = () => {
    return (
        <Router>
            <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
                {/* <Route path="/details" element={<Details></Details>}></Route>
                <Route path="/login" element={<Login></Login>}></Route> */}
            </Routes>
        </Router>
    )
}

export default WebRouter;