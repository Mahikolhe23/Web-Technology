import './App.css';
import Registration from './componant/Registration';
import Login from './componant/Login';
import Details from './componant/Details';

function App() {
  // Login = () => {
  //   <Login></Login>
  // }
  return (
    <div className="App">
      <button onClick={Login()}>Login</button>
    </div>
  );
}

export default App;
