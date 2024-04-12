import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Home from '../../pages/home/Home'


function ArgentBankRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default ArgentBankRouter
