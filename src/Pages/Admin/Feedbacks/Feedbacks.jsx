import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import Styles from "../../Admin/Feedbacks/Feedbacks.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedback } from '../../../store/getFeedbackSlice';
import { CgUserList } from "react-icons/cg";

const Feedbacks = () => {
    const dispatch = useDispatch()
    
  useEffect(()=> {
    dispatch(fetchFeedback())
  },[])
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const Feedbacks = useSelector(state=> state.FeedbackSlice.data)
  

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
                        Feedbacks && Feedbacks.map((feedback)=> {
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

export default Feedbacks;