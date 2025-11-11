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
import Feedbacks from './Pages/Admin/Feedbacks/Feedbacks'
import FeedbacksVendor from './Pages/Vendor/Feedbacks/Feedbacks'
import RoleProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UnauthorisedPage from './Pages/UnauthorisedPage/UnauthorisedPage'


function App() {
    
  return (
    <>
      <Routes>
        {/* //Login Page  */}
        <Route path='login' element={<LoginPage />} />
        
        {/* //Login Page  */}
        <Route path='register' element={<RegisterPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='vehicles' element={<VehiclesPage />} />
        <Route path='/vehicles/:id' element={<SingleVehicle />} ></Route>
        <Route path='about' element={<AboutPage />} />

        <Route path='profile' element={
          <RoleProtectedRoute allowedRoles={["vendor", "admin","user"]}>
            <ProfilePage />
          </RoleProtectedRoute>
          } />
        <Route path='bookings' element={
          <RoleProtectedRoute allowedRoles={["vendor", "user"]}>
            <BookingsPage />
          </RoleProtectedRoute>
          } />
          

        {/* {Vendors Routes} */}
        <Route path='vendor' element={
          <RoleProtectedRoute allowedRoles={["vendor"]}>
          <DashboardPageVendor />
          </RoleProtectedRoute>
          } />
        <Route path='vendor/addvehicle' element={
          <RoleProtectedRoute allowedRoles={["vendor"]}>
          <AddvehiclePage />
          </RoleProtectedRoute>
          } />
        <Route path='vendor/editvehicle' element={
          <RoleProtectedRoute allowedRoles={["vendor"]}>
          <UpdateVehicle />
          </RoleProtectedRoute>
          } />
        <Route path='vendor/bookinghistory' element={
          <RoleProtectedRoute allowedRoles={["vendor"]}>
          <BookingHistory />
          </RoleProtectedRoute>
          } />
        <Route path='vendor/feedbacks' element={
          <RoleProtectedRoute allowedRoles={["vendor"]}>
          <FeedbacksVendor />
          </RoleProtectedRoute>
          } />
        
        {/* <Route path='/admin/dashboard' element={<AdminDashboard />} /> */}
        <Route path='admin' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <DashboardPage />
          </RoleProtectedRoute>
          } />
        <Route path='admin/bookings' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <AdminBookings />
          </RoleProtectedRoute>
          } />
        <Route path='admin/userslist' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <UsersListPage />
          </RoleProtectedRoute>
          } />
        <Route path='admin/vendors' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <VendorsListPage />
          </RoleProtectedRoute>
          } />
        <Route path='admin/vehicleslist' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <VehiclesListPage />
          </RoleProtectedRoute>
          } />
        <Route path='admin/feedbacks' element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
          <Feedbacks />
          </RoleProtectedRoute>
          } />

        {/* //Error Page is here */}
        <Route path='*' element={<ErrorPage />} />
        <Route path='/unauthorized' element={<UnauthorisedPage />} />
      </Routes>
    </>
  )
}

export default App
