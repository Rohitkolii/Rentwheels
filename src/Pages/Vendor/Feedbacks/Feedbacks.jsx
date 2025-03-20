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

  const filteredFeedbacks = Feedbacks && Feedbacks.filter((feedback)=> feedback?.vendor_id === UserProfile?._id)

  const [searchQuery, setSearchQuery] = useState("");
          
              // Filtering function
              const filteredFeedbacksS = filteredFeedbacks && filteredFeedbacks.filter(feedback => {
                  const query = searchQuery.toLowerCase();
                  return (
                      feedback._id.toLowerCase().includes(query) ||
                      feedback.vendor_id.toLowerCase().includes(query) ||
                      feedback.User_id.toLowerCase().includes(query) ||
                      feedback.User_name.toLowerCase().includes(query) ||
                      feedback.Vehicle_id.toLowerCase().includes(query) ||
                      feedback.Feedback_message.toLowerCase().includes(query) ||
                      feedback.Feedback_date.toLowerCase().includes(query)
                  );
              });

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
                <div style={{width: "100%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
                <div className={Styles.dashTop}>
                    {
                        filteredFeedbacksS.length ? filteredFeedbacksS.map((feedback)=> {
                            return(
                                <div key={feedback._id} className={Styles.dashTopin}>
                                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                      <div>
                                        <p><CgUserList /></p>
                                        <p>{feedback.User_name}</p>
                                      </div>
                                      <p>{feedback.Feedback_date}</p>
                                    </div>
                                    <p>{feedback.Feedback_message}</p>
                                    <p style={{fontSize:13, margin: "5px 0", color: 'gray'}}>Vehicle id: {feedback.Vehicle_id}</p>
                                </div>
                            )
                        })
                        :
                        <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No Feedbacks Found!</h1>
                    }
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default FeedbacksVendor;