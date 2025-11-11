import React, { useEffect } from 'react'
import Styles from '../AdminSidebar/AdminSidebar.module.css'
import { MdDashboard } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../store/ProfileSlice';
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { MdManageHistory } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const AdminSidebar = ({setSidebarVisiblity, sidebarVisiblity}) => {
  const dispatch = useDispatch()

  const ProfileRole = useSelector((state) => state?.profileSlice?.data?.userData?.role);
  // console.log(ProfileRole);
  
  useEffect(()=> {
    dispatch(fetchUserProfile())
  }, [])

  return (
    <>
      <aside className={!sidebarVisiblity ? Styles.sidebar : Styles.Hidesidebar}>
        <div className={Styles.sidebarHead}>
          <div>
            <img src="/images/wheel.png" alt="" />
            <p><span style={{color: "#0061ff"}}>R</span>entwheels<span style={{color: "#0061ff"}}>.</span></p>
          </div>
          <IoMdClose className={Styles.closeMenu} onClick={()=> setSidebarVisiblity(!sidebarVisiblity)} />
        </div>
          {
            ProfileRole == "admin" ?
          <ul>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin'><MdDashboard /> Dashboard</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin/userslist'><FaUsersCog /> Users</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin/vendors'><FaUserSecret />Vendors</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin/vehicleslist'><PiSteeringWheelBold />Vehicles</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin/bookings'><FaBookReader />Booking</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/admin/feedbacks'><MdAdminPanelSettings />Feedbacks</NavLink></li>
          </ul>
            :
            ProfileRole == "vendor" ? 
            <ul>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/vendor'><MdDashboard /> Dashboard</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/vendor/addvehicle'><HiOutlineDocumentPlus /> Add Vehicle</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/vendor/editvehicle'><PiSteeringWheelBold />Vehicles</NavLink></li>
            <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/vendor/bookinghistory'><MdManageHistory />Booking History</NavLink></li>
              <li><NavLink end className={({ isActive }) => (isActive ? Styles.active : Styles.inactive)} to='/vendor/feedbacks'><MdAdminPanelSettings />Feedbacks</NavLink></li>
          </ul>
          : ""
          }
      </aside>
    </>
  )
}

export default AdminSidebar