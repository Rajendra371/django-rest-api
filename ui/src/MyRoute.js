import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Posts from './Posts'
import Register from './Register'
import Login from './Login'

const MyRoute = () => {
  return (
   <Router>
      <Routes>
        <Route path ='/' element ={<Posts/>}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path= '/login' element={<Login/>}/>
      </Routes>
   </Router>
  )
}

export default MyRoute
