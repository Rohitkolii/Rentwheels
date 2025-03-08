import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../DashboardPage/DashboardPage.module.css'
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";

const DashboardPage = () => {
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
                <h1>Dashboard</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                {/* <br /> */}
                <div className={Styles.dashTop}>
                  <div>
                    <p><FaCar />Total Vehicles</p>
                    <p>38</p>
                  </div>
                  <div>
                    <p>Total Customer</p>
                    <p>53</p>
                  </div>
                  <div>
                    <p>Total Vendors</p>
                    <p>7</p>
                  </div>
                  <div>
                    <p>Total Bookings</p>
                    <p>33</p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage