import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Loader from '../../../Components/Loader/Loader'
// import Styles from '../DashboardPage/DashboardPage.module.css'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { PiUserListLight } from "react-icons/pi";
import Styles from "../../Admin/DashboardPage/DashboardPage.module.css"
import { useNavigate } from 'react-router';

import { FaCar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../../store/ProfileSlice';
import { fetchVehicleList } from '../../../store/getVehicleSlice';
import { fetchBookingList } from '../../../store/getBookingListSlice';
import { fetchUserList } from '../../../store/userlistSlice';

const DashboardPage = () => {
  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
    dispatch(fetchVehicleList())
    dispatch(fetchBookingList())
    dispatch(fetchUserList(localStorage.getItem("token")))
  },[])
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
  const ProfileDataStatus = useSelector((state)=> state.profileSlice.status)
  // console.log(ProfileData);
  
    const Vehiclesdata = useSelector(state=> state.getVehicleSlice.data)
    const Bookingdata = useSelector(state=> state.BookingListSlice.data)
    const userdatalist = useSelector(state=> state.userListSlice.data.userslist)
  // console.log(userdatalist);
  
  const vendor = userdatalist && userdatalist.filter((item) => item?.role == 'vendor')
  const user = userdatalist && userdatalist.filter((item) => item?.role == 'user')
  
  // if(ProfileDataStatus === "loading"){
  //   return <Loader />
  // }
  
  if(ProfileData?.role != "admin"){
    navigate("/")
  }

  

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
                <h1>Dashboard</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                {/* <br /> */}
                <div className={Styles.dashTop}>
                  <div>
                    <p><IoCarOutline /></p>
                    <p>Total Vehicles</p>
                    <p>{Vehiclesdata?.length || 0}</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Customer</p>
                    <p>{vendor?.length || 0}</p>
                  </div>
                  <div>
                    <p><PiUserListLight /></p>
                    <p>Total Vendors</p>
                    <p>{vendor?.length || 0}</p>
                  </div>
                  <div>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>{Bookingdata?.length || 0}</p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage