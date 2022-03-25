import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from '../Components/Forms/Login'



const AuthRoutes =()=>{
  
    return(
        <div>
       
        <Routes>
        <Route path='/login' element={<LoginForm />} />
        </Routes>
     
        </div>
    )
}

export default AuthRoutes