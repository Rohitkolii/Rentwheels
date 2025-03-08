import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../AdminBookings/AdminBookings.module.css'

const VendorsListPage = () => {
      const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    
  return (
    <>

        <div style={{display: 'flex'}}>
            <AdminSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <section style={{width: "100%"}}>
                <AdminNavabar 
                setSidebarVisiblity={setSidebarVisiblity}
                sidebarVisiblity={sidebarVisiblity} />
                <div className={Styles.bookingtable}>
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Vendor</th>
                            <th>Age</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Total Vehicle</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>Kamal koli</td>
                            <td>27</td>
                            <td>kamalk@gmail.com</td>
                            <td>9988776655</td>
                            <td>2</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default VendorsListPage