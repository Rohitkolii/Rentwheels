import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from "../../Admin/AdminBookings/AdminBookings.module.css"

const UpdateVehicle = () => {

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
              <div className={Styles.bookingtable}>
              <table>
                    <tr>
                        <th>S.No</th>
                        <th>V.id</th>
                        <th>Vehicle & Name</th>
                        <th>Model</th>
                        <th>Rent</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/supcar1.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/supcar2.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/bg2.jpg" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/supcar3.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/supcar2.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/bg2.jpg" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>025414</td>
                        <td>
                            <img src="../images/supcar3.png" alt="" />
                            <p>Super Delux</p>
                            {/* <p>025414</p> */}
                        </td>
                        <td>model name</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Available</td>
                    </tr>
                    
                </table>
              </div>
            </section>
        </div>
    </>
  )
}

export default UpdateVehicle