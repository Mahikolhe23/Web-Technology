import logo from './logo.svg';
import './App.css';
// import Welcome from './component/welcome';
import Add from './component/addition';
function App() {
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Welcome name="komu"></Welcome> */}
          <div>
            num1 <input type="number" name="num1" id="num1"></input>
            num2 <input type="number" name="num2" id="num2"></input>
          </div>
          <Add num1={n1} num2={n2}></Add>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
