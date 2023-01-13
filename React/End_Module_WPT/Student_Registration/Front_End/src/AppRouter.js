import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Display from './Componant/Display'
import Home from './Componant/Home'
import Login from './Componant/Login'
import Register from './Componant/Register'

function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/registration' element={<Register></Register>}></Route>
                    <Route path='/display' element={<Display></Display>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default AppRouter
