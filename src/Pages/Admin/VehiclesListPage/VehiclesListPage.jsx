import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
// import Styles from '../AdminBookings/AdminBookings.module.css'
import Styles from '../VehiclesListPage/VehiclesListPage.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { fetchVehicleList } from '../../../store/getVehicleSlice'

const VehiclesListPage = () => {
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const dispatch = useDispatch()
    const vehicledata = useSelector(state => state.getVehicleSlice.data)

    useEffect(()=> {
        dispatch(fetchVehicleList())
    },[])
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
                    
                    {
                        vehicledata && vehicledata.map((vehicle, i) => {
                            return(
                                <tr>
                                <td>{i}</td>
                                <td>{vehicle._id}</td>
                                <td>
                                    <img src={`http://localhost:5000${vehicle.Vehicle_image}`} alt="" />
                                    <p>{vehicle.Vehicle_name}</p>
                                    {/* <p>025414</p> */}
                                </td>
                                <td>{vehicle.Vehicle_model}</td>
                                <td>{vehicle.Vehicle_rent}</td>
                                <td style={{color: 'green'}}>Available</td>
                            </tr>
                            )
                        })
                    }
                    
                    
                    
                </table>
              </div>
            </section>
        </div>
    </>
  )
}

export default VehiclesListPage