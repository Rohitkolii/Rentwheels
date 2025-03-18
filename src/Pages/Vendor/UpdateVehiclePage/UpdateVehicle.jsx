import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from "../../Admin/AdminBookings/AdminBookings.module.css"
import { fetchVehicleList } from '../../../store/getVehicleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../../store/ProfileSlice'
import { toast } from 'react-toastify'
import { ImBin } from 'react-icons/im'

const UpdateVehicle = () => {
    
    const dispatch = useDispatch()
    const vehicledata = useSelector(state => state.getVehicleSlice.data)
    const userid = useSelector(state => state.profileSlice.data.userData)
    
    useEffect(()=> {
        dispatch(fetchVehicleList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[vehicledata])

    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    

    // console.log(vehicledata);
    // console.log(userid);
    

    const filteredVehicle = vehicledata && vehicledata.filter((vehicle)=> vehicle?.user_id === userid?._id)
    console.log(filteredVehicle);
    
    const deleteVehicle = async (id) => {
            try {
                await fetch(`http://localhost:5000/api/vehicle/delete/${id}`,{
                    method: "DELETE"
                })
                toast.success('Vehicle Deleted Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                toast.error('Something went wrong!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            
        }

    const updateVehicleStatus = async (vehicle) => {
            const id = vehicle._id;
            if(!vehicle.isBooked){
                alert("Vehicle is already Available!")
            }else{
            try {
                await fetch(`http://localhost:5000/api/vehicle/updatestatus/${id}`,{
                    method: "PUT"
                })
                toast.success('Status Changed Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                toast.error('Something went wrong!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
            
        }
  
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
                        <th>Change Status</th>
                        <th>Remove</th>
                    </tr>
                    {
                        filteredVehicle && filteredVehicle.map((vehicle, i)=> {
                            return(
                                <tr key={vehicle._id} title={vehicle._id}>
                                    <td>{i}</td>
                                    {/* <td>{vehicle._id}</td> */}
                                    <td>
                                        <img src={`http://localhost:5000${vehicle.Vehicle_image}`} alt="" />
                                        <p>{vehicle.Vehicle_name}</p>
                                        {/* <p>025414</p> */}
                                    </td>
                                    <td>{vehicle.Vehicle_model}</td>
                                    <td>{vehicle.Vehicle_average} km/l</td>
                                    <td>{vehicle.Vehicle_rent}</td>
                                    <td onClick={()=> updateVehicleStatus(vehicle)} style={vehicle?.isBooked ? {color: "orange"} :{color: 'green'}}>{vehicle?.isBooked ? "Booked" : "Available"}</td>
                                    <td onClick={()=> deleteVehicle(vehicle._id)} style={{cursor: "pointer"}}><ImBin style={{color: "#0061ff", fontSize: 20, cursor: "pointer"}} /></td>
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