import React from 'react'
import {Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SingInPage/SignIn';
import SignUp from '../pages/SignupPage/SignUp';
import Home from '../compounds/Home/Home';
import Edit from '../compounds/edit/Edit';
import ProtectedRoute from '../compounds/Protected-route/ProtectedRoute';



function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<SignIn/>} />
      <Route path={'/signup'} element={<SignUp/>} />
      <Route path={'/home'} element = {<ProtectedRoute> <Home /> </ProtectedRoute>} /> 
      <Route path={'/edit/:_id'} element = {<Edit/>} />
    </Routes>
  )
}

export default Routing;