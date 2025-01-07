import { useState } from 'react'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import VehiclesPage from './Pages/VehiclesPage/VehiclesPage'
import BookingsPage from './Pages/BookingsPage/BookingsPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/vehicles' element={<VehiclesPage />} />
        <Route path='/bookings' element={<BookingsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
