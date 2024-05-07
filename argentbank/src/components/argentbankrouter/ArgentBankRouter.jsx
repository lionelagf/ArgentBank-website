import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Home from '../../pages/home/Home'
import SignIn from '../../pages/sign-in/SignIn'
import User from '../../pages/user-profile/UserProfile'
import UserName from '../../pages/username/Username'
import PageError from '../../pages/404/404'

function ArgentBankRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
        <Route path='/edit-username' element={<UserName />} />
        <Route path='*' element={<PageError />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default ArgentBankRouter
