import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { PiUserListLight } from "react-icons/pi";
import Styles from "../../Admin/DashboardPage/DashboardPage.module.css"
import { MdOutlineFeedback } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";

import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../../store/DashSlice';
import { fetchUserProfile } from '../../../store/ProfileSlice';
import Loading from '../../../Components/Loading/Loading';
import Loader from '../../../Components/Loader/Loader';

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()  

  useEffect(()=> {
    dispatch(fetchDashboardData())
  },[])
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)


  const {data, status} = useSelector(state=> state.DashDataSlice)

    if(status === 'loading'){
      return <Loader />
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
                <div className={Styles.dashTop}>
                  <div onClick={()=> navigate("vehicleslist")}>
                    <p><IoCarOutline /></p>
                    <p>Total Vehicles</p>
                    <p>{data?.Total_Vehicle || 0}</p>
                  </div>
                  <div onClick={()=> navigate("userslist")}>
                    <p><HiOutlineUsers /></p>
                    <p>Total Customer</p>
                    <p>{data?.Total_Users || 0}</p>
                  </div>
                  <div onClick={()=> navigate("vendors")}>
                    <p><PiUserListLight /></p>
                    <p>Total Vendors</p>
                    <p>{data?.Total_Vendors || 0}</p>
                  </div>
                  <div onClick={()=> navigate("bookings")}>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>{data?.Total_Bookings || 0}</p>
                  </div>
                  <div onClick={()=> navigate("feedbacks")}>
                    <p><MdOutlineFeedback /></p>
                    <p>Total Feedbacks</p>
                    <p>{data?.Total_Feedbacks || 0}</p>
                  </div>
                  <div>
                    <p><FaIndianRupeeSign /></p>
                    <p>Vendors Total Earnings</p>
                    <p>{data?.Total_Earnings || 0}</p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage