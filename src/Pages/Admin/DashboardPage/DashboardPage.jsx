import React from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'

const DashboardPage = () => {
  return (
    <>
        <AdminNavabar />

        <div style={{display: 'flex'}}>
            <AdminSidebar />
        </div>
    </>
  )
}

export default DashboardPage