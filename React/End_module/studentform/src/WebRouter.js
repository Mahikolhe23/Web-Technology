import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Details from "./componant/Details";
import Login from "./componant/Login";
import Home from "./componant/Home";

const WebRouter = () => {

    return (
        <Router>
            <Home></Home>
            <Routes>
                <Route path="/details" element={<Details></Details>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>

        </Router>
    )


}

export default WebRouter;