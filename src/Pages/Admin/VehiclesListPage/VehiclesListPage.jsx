import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
// import Styles from '../AdminBookings/AdminBookings.module.css'
import Styles from '../VehiclesListPage/VehiclesListPage.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { fetchVehicleList } from '../../../store/getVehicleSlice'
import { ImBin } from "react-icons/im";


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
                        <th>Vendor name</th>
                        <th>Vehicle & Name</th>
                        <th>Model</th>
                        <th>₹ Rent</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    
                    {
                        vehicledata && vehicledata.map((vehicle, i) => {
                            return(
                                <tr>
                                <td>{i+1}</td>
                                <td title={vehicle._id}>{vehicle._id.substring(0,10)}...</td>
                                <td>{vehicle.user_name}</td>
                                <td>
                                    <img src={`http://localhost:5000${vehicle.Vehicle_image}`} alt="" />
                                    <p>{vehicle.Vehicle_name}</p>
                                    {/* <p>025414</p> */}
                                </td>
                                <td>{vehicle.Vehicle_model}</td>
                                <td>₹ {vehicle.Vehicle_rent}</td>
                                <td>{vehicle.isBooked ? <span style={{color: 'orange'}}> Booked </span> : <span style={{color: 'green'}}>Available</span>}</td>
                                <td style={{cursor: "pointer"}}><ImBin style={{color: "#0061ff", fontSize: 20, cursor: "pointer"}} /></td>
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