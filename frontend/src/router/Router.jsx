import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Register from '../pages/Auth/Register'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<App/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>
        </Routes>
    </Router>
   
  )
}
