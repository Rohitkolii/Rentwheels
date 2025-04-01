import React, { useEffect, useState } from 'react'
import Styles from '../AdminNavbar/AdminNavbar.module.css'
import { NavLink, useNavigate } from 'react-router'
import { RiMenu2Fill } from 'react-icons/ri'
import { fetchUserProfile } from '../../store/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux'

const AdminNavabar = ({setSidebarVisiblity, sidebarVisiblity}) => {

  const [profileStatus, setProfileStatus] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

   useEffect(()=> {
          dispatch(fetchUserProfile(localStorage.getItem("token")))
      },[])
  
      const userProfile = useSelector(state => state.profileSlice.data.userData)

      const logoutUser = () => {
              localStorage.removeItem("token")
              toast.success('Logout Successfully', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });

                  navigate("/login")
          }

  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <RiMenu2Fill onClick={()=> setSidebarVisiblity(!sidebarVisiblity)}/>
            </div>
            
            <div onClick={()=> setProfileStatus(!profileStatus)} className={Styles.navlinks}>
                <div className={Styles.profilelink}>
                  <div>
                    <img src="/images/user2.jpg" alt="" />
                  </div>

                  <div>
                    <p>{userProfile?.username || "Admin"}</p>
                    <p>{userProfile?.email}</p>
                  </div>
                </div>
            </div>
        </nav>

        {
          profileStatus ? <div onClick={()=> setProfileStatus(!profileStatus)} className ={Styles.overlay}></div> : ''
        }

        {
          profileStatus ?
          <div className={Styles.profilemenu}>
                  <ul>
                      <li><NavLink to="/Profile">Profile</NavLink></li>
                      <li><NavLink onClick={logoutUser} to="">Logout</NavLink></li>
                      {/* <li><NavLink to="/">Logout</NavLink></li> */}
                  </ul>
              </div>
        : ''}
    </>
  )
}

export default AdminNavabar