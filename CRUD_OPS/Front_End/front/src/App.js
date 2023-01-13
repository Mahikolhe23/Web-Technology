import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Display from './Componant/Display'
import Login from './Componant/Login'
import Register from './Componant/Register'
import Home from './Componant/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registration' element={<Register></Register>}></Route>
          <Route path='/display' element={<Display></Display>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
