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
import AddvehiclePage from './Pages/Vendor/AddvehiclePage/AddvehiclePage'
import UpdateVehicle from './Pages/Vendor/UpdateVehiclePage/UpdateVehicle'
import SingleVehicle from './Pages/SingleVehicle/SingleVehicle'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import DashboardPageVendor from './Pages/Vendor/DashboardPage/DashboardPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import BookingHistory from './Pages/Vendor/BookingHistory/BookingHistory'

function App() {
    
  return (
    <>
      <Routes>
        {/* //Login Page  */}
        <Route path='login' element={<LoginPage />} />
        
        {/* //Login Page  */}
        <Route path='register' element={<RegisterPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='vehicles' element={<VehiclesPage />} />
        <Route path='/vehicles/:id' element={<SingleVehicle />} ></Route>
        <Route path='bookings' element={<BookingsPage />} />
        <Route path='about' element={<AboutPage />} />

        {/* {Vendors Routes} */}
        <Route path='vendor' element={<DashboardPageVendor />} />
        <Route path='vendor/addvehicle' element={<AddvehiclePage />} />
        <Route path='vendor/editvehicle' element={<UpdateVehicle />} />
        <Route path='vendor/bookinghistory' element={<BookingHistory />} />
        
        {/* <Route path='/admin/dashboard' element={<AdminDashboard />} /> */}
        <Route path='admin' element={<DashboardPage />} />
        <Route path='admin/bookings' element={<AdminBookings />} />
        <Route path='admin/userslist' element={<UsersListPage />} />
        <Route path='admin/vendors' element={<VendorsListPage />} />
        <Route path='admin/vehicleslist' element={<VehiclesListPage />} />

        {/* //Error Page is here */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
