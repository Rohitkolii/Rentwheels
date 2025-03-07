import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../DashboardPage/DashboardPage.module.css'

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
            </div>
        </div>
    </>
  )
}

export default DashboardPage