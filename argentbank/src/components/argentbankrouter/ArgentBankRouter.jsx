import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Home from '../../pages/home/Home'
import SignIn from '../../pages/sign-in/SignIn'
import User from '../../pages/user/User'


function ArgentBankRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default ArgentBankRouter
