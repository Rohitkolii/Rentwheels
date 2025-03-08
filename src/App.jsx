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
// import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import AdminBookings from './Pages/Admin/AdminBookings/AdminBookings'
import DashboardPage from './Pages/Admin/DashboardPage/DashboardPage'
import UsersListPage from './Pages/Admin/UsersListPage/UsersListPage'
import VendorsListPage from './Pages/Admin/VendorsListPage/VendorsListPage'
import VehiclesListPage from './Pages/Admin/VehiclesListPage/VehiclesListPage'
import AddvehiclePage from './Pages/AddvehiclePage/AddvehiclePage'
import UpdateVehicle from './Pages/UpdateVehiclePage/UpdateVehicle'

function App() {
    
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='vehicles' element={<VehiclesPage />} />
        <Route path='addvehicle' element={<AddvehiclePage />} />
        <Route path='editvehicle' element={<UpdateVehicle />} />
        <Route path='bookings' element={<BookingsPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<LoginPage />} />
        {/* <Route path='/admin/dashboard' element={<AdminDashboard />} /> */}
        <Route path='admin' element={<DashboardPage />} />
        <Route path='admin/bookings' element={<AdminBookings />} />
        <Route path='admin/userslist' element={<UsersListPage />} />
        <Route path='admin/vendors' element={<VendorsListPage />} />
        <Route path='admin/vehicleslist' element={<VehiclesListPage />} />
      </Routes>
    </>
  )
}

export default App
