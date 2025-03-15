import React from 'react'
import Styles from '../AdminSidebar/AdminSidebar.module.css'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const AdminSidebar = ({setSidebarVisiblity, sidebarVisiblity}) => {
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
        <ul>
          <li><Link to='/admin'><MdDashboard /> Dashboard</Link></li>
          <li><Link to='/admin/userslist'><FaUsersCog /> Users</Link></li>
          <li><Link to='/admin/vendors'><FaUserSecret />Vendors</Link></li>
          <li><Link to='/admin/vehicleslist'><PiSteeringWheelBold />Vehicles</Link></li>
          <li><Link to='/admin/bookings'><FaBookReader />Booking</Link></li>
          <li><Link to='/'><MdAdminPanelSettings />Settings</Link></li>
        </ul>
      </aside>
    </>
  )
}

export default AdminSidebar