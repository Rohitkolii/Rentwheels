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
                            <th>Customer</th>
                            <th>Supplier</th>
                            <th>Vehicle Type</th>
                            <th>Name</th>
                            <th>From</th>
                            <th>to</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Ajit Enterprise</td>
                            <td>Car</td>
                            <td>Suzuki Dezire</td>
                            <td>01/01/2025</td>
                            <td>07/01/2025</td>
                            <td>1800RS</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Ajit Enterprise</td>
                            <td>Car</td>
                            <td>Suzuki Dezire</td>
                            <td>01/01/2025</td>
                            <td>07/01/2025</td>
                            <td>1800RS</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Ajit Enterprise</td>
                            <td>Car</td>
                            <td>Suzuki Dezire</td>
                            <td>01/01/2025</td>
                            <td>07/01/2025</td>
                            <td>1800RS</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Ajit Enterprise</td>
                            <td>Car</td>
                            <td>Suzuki Dezire</td>
                            <td>01/01/2025</td>
                            <td>07/01/2025</td>
                            <td>1800RS</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Ajit Enterprise</td>
                            <td>Car</td>
                            <td>Suzuki Dezire</td>
                            <td>01/01/2025</td>
                            <td>07/01/2025</td>
                            <td>1800RS</td>
                            <td>Active</td>
                        </tr>
                    </table>
            </div>
        </section>
      </section>
      
    </>
  )
}

export default AdminBookings