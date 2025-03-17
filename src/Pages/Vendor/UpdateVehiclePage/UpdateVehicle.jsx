import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from "../../Admin/AdminBookings/AdminBookings.module.css"
import { fetchVehicleList } from '../../../store/getVehicleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../../store/ProfileSlice'

const UpdateVehicle = () => {
    
    useEffect(()=> {
        dispatch(fetchVehicleList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[])

    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    
    const dispatch = useDispatch()
    const vehicledata = useSelector(state => state.getVehicleSlice.data)
    const userid = useSelector(state => state.profileSlice.data.userData)

    // console.log(vehicledata);
    // console.log(userid);
    

    const filteredVehicle = vehicledata && vehicledata.filter((vehicle)=> vehicle?.user_id === userid?._id)
    console.log(filteredVehicle);
    

  
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
                        {/* <th>V.id</th> */}
                        <th>Vehicle & Name</th>
                        <th>Model</th>
                        <th>Average</th>
                        <th>Rent</th>
                        <th>Status</th>
                    </tr>
                    {
                        filteredVehicle && filteredVehicle.map((vehcle, i)=> {
                            return(
                                <tr key={vehcle._id} title={vehcle._id}>
                                    <td>{i}</td>
                                    {/* <td>{vehcle._id}</td> */}
                                    <td>
                                        <img src={`http://localhost:5000${vehcle.Vehicle_image}`} alt="" />
                                        <p>{vehcle.Vehicle_name}</p>
                                        {/* <p>025414</p> */}
                                    </td>
                                    <td>{vehcle.Vehicle_model}</td>
                                    <td>{vehcle.Vehicle_average} km/l</td>
                                    <td>{vehcle.Vehicle_rent}</td>
                                    <td style={vehcle?.isBooked ? {color: "orange"} :{color: 'green'}}>{vehcle?.isBooked ? "Booked" : "Available"}</td>
                                </tr>

                            )  
                        }) || <h3>No Vehicles found</h3>
                    }

                </table>
              </div>
            </section>
        </div>
    </>
  )
}

export default UpdateVehicle