import React, { useState } from 'react'
// import Navbar from '../../../Components/Navbar/Navbar'
import AddVehicles from '../../../Components/AddVehicles/AddVehicles'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
// import Styles from "../../Vendor/AddvehiclePage/AddvehiclePage"
import Styles from "../../Admin/DashboardPage/DashboardPage.module.css"
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'

const AddvehiclePage = () => {
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
            <AddVehicles />
          </section>
        </div>
        </div>
    </>
  )
}

export default AddvehiclePage