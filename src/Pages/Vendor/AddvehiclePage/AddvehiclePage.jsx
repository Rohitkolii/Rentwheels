import React, { useEffect, useState } from 'react'
// import Navbar from '../../../Components/Navbar/Navbar'
import AddVehicles from '../../../Components/AddVehicles/AddVehicles'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import StylesVendor from "../../Vendor/AddvehiclePage/AddvehiclePage.module.css"
import Styles from "../../Admin/DashboardPage/DashboardPage.module.css"
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import { addVehicle } from '../../../store/addVehicleSlice'

import { PiSteeringWheelBold } from "react-icons/pi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { FaRegImage } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { BiEqualizer } from "react-icons/bi";

import {useDispatch, useSelector} from "react-redux"
import { ToastContainer } from 'react-toastify'
import { fetchUserProfile } from '../../../store/ProfileSlice'

const AddvehiclePage = () => {

  const dispatch = useDispatch()

  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  const[image, setimage] = useState("")
  const[Vehicle_type, setVehicle_type] = useState("car")
  const[Vehicle_name, setVehicle_name] = useState("")
  const[Vehicle_model, setVehicle_model] = useState("")
  const[Vehicle_rent, setVehicle_rent] = useState("")
  const[Vehicle_average, setVehicle_average] = useState("")

  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
  },[])

  const userData = useSelector(state => state.profileSlice.data.userData)

  const Createvehicle = (e) => {

    e.preventDefault();

    const data = {
      user_name : userData.username,
      user_id : userData._id,
      image,
      Vehicle_type,
      Vehicle_name,
      Vehicle_model,
      Vehicle_rent,
      Vehicle_average
    }

    dispatch(addVehicle(data, localStorage.getItem("token")))
    // console.log(data);

    setimage("")
    setVehicle_type("")
    setVehicle_name("")
    setVehicle_model("")
    setVehicle_rent("")
    setVehicle_average("")
    
  }

  return (
    <>
    {/* <ToastContainer /> */}
      <div style={{display: 'flex'}}>
        <AdminSidebar
        setSidebarVisiblity={setSidebarVisiblity}
        sidebarVisiblity={sidebarVisiblity} />
        <div className={Styles.DashboardPage}>
          <AdminNavabar
          setSidebarVisiblity={setSidebarVisiblity} 
          sidebarVisiblity={sidebarVisiblity}/>

          <section className={Styles.dashContent}>
            {/* <AddVehicles /> */}
            <form onSubmit={Createvehicle} className={StylesVendor.AddVehiclecon}>
            <p style={{fontWeight: 500, color: '#007dfe'}}>Add Vehicles</p>
            <div className={StylesVendor.row}>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><PiSteeringWheelBold />vehicle type</label>
                    <select value={Vehicle_type} onChange={(e)=> setVehicle_type(e.target.value)} name="vehicletype" id="vehicletype" required>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="scooty">Scooty</option>
                    </select>
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><MdDriveFileRenameOutline />Vehicle name</label>
                    <input onChange={(e)=> setVehicle_name(e.target.value)} value={Vehicle_name} placeholder='Maruti Suzuki' type="text" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><IoLogoModelS />Model</label>
                    <input onChange={(e)=> setVehicle_model(e.target.value)} value={Vehicle_model} placeholder='Enter model number' type="text" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><BiEqualizer />Average</label>
                    <input onChange={(e)=> setVehicle_average(e.target.value)} value={Vehicle_average} placeholder='Enter vehicle average' type="text" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><MdCurrencyRupee />Rent/day</label>
                    <input onChange={(e)=> setVehicle_rent(e.target.value)} value={Vehicle_rent} placeholder='Enetr Price' min="500" max="15000" type="number" required />
                </div>

                 <div className={StylesVendor.col}>
                    <label htmlFor='fileupload'><FaRegImage />Upload image</label>
                    <input onChange={(e)=> setimage(e.target.files[0])}  id='fileupload' type="file" required />
                </div>

            </div>
                <div className={StylesVendor.col}>
                    <input className={StylesVendor.btn} type="submit" value="Add vehicle" />
                </div>
          </form>
          </section>
        </div>
        </div>
    </>
  )
}

export default AddvehiclePage