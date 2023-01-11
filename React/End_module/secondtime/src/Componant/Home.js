import Details from "./Details";
import Login from "./Login";
import NavBar from "./NavBar";
import './Home.css'
function Home() {
    return (
        <div className="App">
             <NavBar></NavBar>
            <div class="wrapper">
                <div className="nav"><Login></Login></div>
                <div className="main"><Details></Details></div>
            </div>
        </div>
    );
}

export default Home;