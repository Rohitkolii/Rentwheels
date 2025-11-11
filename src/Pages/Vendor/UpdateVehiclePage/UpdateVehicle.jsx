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

    const filteredVehicle = vehicledata && vehicledata.filter((vehicle)=> vehicle?.user_id === userid?._id)
    // console.log(filteredVehicle);
    
    useEffect(()=> {
        dispatch(fetchVehicleList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[])

    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const deleteVehicle = async (id) => {
        const res = confirm("Are you sure! you want to delete")

        if(res){
            try {
                await fetch(`${import.meta.env.VITE_URL}/api/vehicle/delete/${id}`,{
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
        }else{
            toast.error('Request Canceled!', {
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
                const res = confirm("Are you sure! you want to Update Status!")
                if(res){
                    try {
                        await fetch(`${import.meta.env.VITE_URL}/api/vehicle/updatestatus/${id}`,{
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
                }else{
                    toast.error('Request Cenceled!', {
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

        const [searchQuery, setSearchQuery] = useState("");
                
        // Filtering function
        const filteredVehicles = filteredVehicle && filteredVehicle.filter(vehicle => {
            const query = searchQuery.toLowerCase();
            return (
                vehicle.user_id.toLowerCase().includes(query) ||
                vehicle.user_name.toLowerCase().includes(query) ||
                vehicle.Vehicle_type.toLowerCase().includes(query) ||
                vehicle.Vehicle_name.toLowerCase().includes(query) ||
                vehicle.Vehicle_model.toLowerCase().includes(query) ||
                vehicle.Vehicle_rent.toLowerCase().includes(query) ||
                vehicle.Vehicle_average.toLowerCase().includes(query)
                // vehicle.isBooked.includes(query)
            );
        });
  
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
              <div style={{width: "95%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
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
                        filteredVehicles.length ? filteredVehicles.map((vehicle, i)=> {
                            return(
                                <tr key={vehicle._id} title={vehicle._id}>
                                    <td>{i+1}</td>
                                    {/* <td>{vehicle._id}</td> */}
                                    <td>
                                        <img src={`${import.meta.env.VITE_URL}${vehicle.Vehicle_image}`} alt="" />
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
                        }) : <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No Vehicle Found!</h1>
                    }

                </table>
              </div>
            </section>
        </div>
    </>
  )
}

export default UpdateVehicle