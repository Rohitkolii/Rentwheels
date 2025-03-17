import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from '../../Admin/DashboardPage/DashboardPage.module.css'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { PiUserListLight } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";


import { FaCar } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../../store/ProfileSlice';
import Loader from '../../../Components/Loader/Loader';
import { fetchVehicleList } from '../../../store/getVehicleSlice';
import { fetchBookingList } from '../../../store/getBookingListSlice';

const DashboardPageVendor = () => {
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
  const ProfileDataStatus = useSelector((state)=> state.profileSlice.status)
  // console.log(ProfileDataStatus);
  

  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
    dispatch(fetchVehicleList())
    dispatch(fetchBookingList())
  }, [])

  const Vehiclesdata = useSelector(state=> state.getVehicleSlice.data)
  const Bookingdata = useSelector(state=> state.BookingListSlice.data)
  
  const filteredv = Vehiclesdata && Vehiclesdata.filter((item) => item?.user_id == ProfileData._id)
  const filteredb = Bookingdata && Bookingdata.filter((item) => item?.Vendor_id == ProfileData._id)
  const totalRent = filteredb.reduce((sum, booking) => sum + Number(booking.Vehicle_rent), 0);
  
  // console.log(filteredb);

  
  // filteredb && filteredb.forEach(element => {
  //   totalRent += parseInt(element.Vehicle_rent);  
  // });

  // console.log(totalRent);
  
  
  // if(ProfileDataStatus == "loading"){
    //   return <Loader />
    // }
    
    // if(ProfileData && ProfileData.role != "vendor"){
    //   navigate("/")
    // }
  
  return (
    <>
      
        <div style={{display: 'flex'}}>
            <AdminSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.DashboardPage}>
              <AdminNavabar 
              setSidebarVisiblity={setSidebarVisiblity} 
              sidebarVisiblity={sidebarVisiblity}/>

              <section className={Styles.dashContent}>
                <h1>Vendor's Dashboard</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                {/* <br /> */}
                <div className={Styles.dashTop}>
                  <div>
                    <p><IoCarOutline /></p>
                    <p>Total Vehicles</p>
                    <p>{filteredv?.length || 0}</p>
                  </div>
                  <div>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>{filteredb?.length || 0}</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Feedback</p>
                    <p>53</p>
                  </div>
                  <div>
                    <p><MdCurrencyRupee /></p>
                    <p>Earnings</p>
                    <p>{totalRent || 0} Rs.</p>
                  </div>
                  
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPageVendor