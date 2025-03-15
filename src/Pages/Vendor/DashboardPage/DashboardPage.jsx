import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../../Admin/DashboardPage/DashboardPage.module.css'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { PiUserListLight } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";


import { FaCar } from "react-icons/fa";

const DashboardPageVendor = () => {
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
  return (
    <>

        <div style={{display: 'flex'}}>
            <AdminSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.DashboardPage}>
              <AdminNavabar 
              setSidebarVisiblity={setSidebarVisiblity} 
              sidebarVisiblity={sidebarVisiblity}/>

              <section className={Styles.dashContent}>
                <h1>Vendor's Dashboard</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                {/* <br /> */}
                <div className={Styles.dashTop}>
                  <div>
                    <p><IoCarOutline /></p>
                    <p>Total Vehicles</p>
                    <p>38</p>
                  </div>
                  <div>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>33</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Feedback</p>
                    <p>53</p>
                  </div>
                  <div>
                    <p><MdCurrencyRupee /></p>
                    <p>Earnings</p>
                    <p>7</p>
                  </div>
                  
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPageVendor