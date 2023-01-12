import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <Link to="/"><button>Home</button></Link>
            <Link to="/details"><button>Details</button></Link>
            <Link to="/login"><button>LOGIN</button></Link>
        </div>
    );
}

export default Home;