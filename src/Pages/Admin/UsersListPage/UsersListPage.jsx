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
                                        <th>id</th>
                                        <th>Customer</th>
                                        <th>Age</th>
                                        <th>DL No.</th>
                                        <th>email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Kamal koli</td>
                                        <td>27</td>
                                        <td>DL88888****oo88</td>
                                        <td>kamalk@gmail.com</td>
                                        <td>9988776655</td>
                                        <td>Delhi</td>
                                    </tr>
                                    
                                </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default UsersListPage