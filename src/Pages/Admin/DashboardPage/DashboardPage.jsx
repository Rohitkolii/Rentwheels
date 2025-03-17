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

const DashboardPage = () => {
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
  const ProfileDataStatus = useSelector((state)=> state.profileSlice.status)
  console.log(ProfileDataStatus);
  

  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
  }, [ProfileDataStatus])
  
  if(ProfileDataStatus == "loading"){
    return <Loader />
  }
  
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
                    <p>38</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Customer</p>
                    <p>53</p>
                  </div>
                  <div>
                    <p><PiUserListLight /></p>
                    <p>Total Vendors</p>
                    <p>7</p>
                  </div>
                  <div>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>33</p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage