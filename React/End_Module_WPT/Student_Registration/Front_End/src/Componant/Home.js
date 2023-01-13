import Register from "./Register";
import Login from "./Login";
import NavBar from "./NavBar";
// import './Home.css'
import Display from "./Display";
function Home() {
    return (
        <div className="App">
            <h1>Welcome to Student Registration Portal</h1>
            <NavBar></NavBar>
            {/* <div class="wrapper">
                <div className="nav"><Login></Login></div>
                <div className="main"><Register></Register></div>   
                <div className="second"><Display></Display></div>
            </div> */}
        </div>
    );
}

export default Home;