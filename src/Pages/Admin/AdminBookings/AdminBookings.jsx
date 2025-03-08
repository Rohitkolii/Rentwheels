import React, {useState} from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
// import Styles from '../BookingsPage/BookingsPage.module.css'
import Styles from './AdminBookings.module.css'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
const AdminBookings = () => {
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
  
  return (
    <>
      <section className={Styles.adminbookings} style={{display:'flex'}}>
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
                        <th>b. id</th>
                        <th>Vehicle & Name</th>
                        <th>customer</th>
                        <th>Vendor</th>
                        <th>Start to End</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>1111</td>
                        <td>
                            <img src="../images/supcar1.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>Raju</td>
                        <td>suresh</td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>
                            <img src="../images/supcar2.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>Raju</td>
                        <td>suresh</td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>
                            <img src="../images/bg2.jpg" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>Raju</td>
                        <td>suresh</td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>
                            <img src="../images/supcar3.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>Raju</td>
                        <td>suresh</td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    
                </table>
            </div>
        </section>
      </section>
      
    </>
  )
}

export default AdminBookings