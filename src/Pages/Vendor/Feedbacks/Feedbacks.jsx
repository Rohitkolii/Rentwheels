import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from "../../Admin/Feedbacks/Feedbacks.module.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../../store/ProfileSlice';
import { fetchFeedback } from '../../../store/getFeedbackSlice';
import { CgUserList } from "react-icons/cg";

const FeedbacksVendor = () => {
    const dispatch = useDispatch()
    
  useEffect(()=> {
    dispatch(fetchFeedback())
    dispatch(fetchUserProfile(localStorage.getItem("token")))
  },[])
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const UserProfile = useSelector(state=> state.profileSlice.data.userData)
    const Feedbacks = useSelector(state=> state.FeedbackSlice.data)

  const filteredFeedbacks = Feedbacks && Feedbacks.filter((feedback)=> feedback.vendor_id === UserProfile?._id)

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
                <h1>Feedbacks</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                {/* <br /> */}
                <div className={Styles.dashTop}>
                    {
                        filteredFeedbacks && filteredFeedbacks.map((feedback)=> {
                            return(
                                <div className={Styles.dashTopin}>
                                    <div>
                                        <p><CgUserList /></p>
                                        <p>{feedback.User_name}</p>
                                    </div>
                                    <p>{feedback.Feedback_message}</p>
                                </div>
                            )
                        })
                    }
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default FeedbacksVendor;