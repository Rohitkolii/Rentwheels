import React, { useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../AdminBookings/AdminBookings.module.css'

const UsersListPage = () => {
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
        </div>
    </>
  )
}

export default UsersListPage