import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'

const VehiclesListPage = () => {
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
  return (
    <>
        <div style={{display: 'flex'}}>
            <AdminSidebar
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity}/>
            
            <section style={{width: "100%"}}>
              <AdminNavabar 
              setSidebarVisiblity={setSidebarVisiblity}
              sidebarVisiblity={sidebarVisiblity} />

            </section>
        </div>
    </>
  )
}

export default VehiclesListPage