import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Styles from '../ProfilePage/ProfilePage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../store/ProfileSlice'
const ProfilePage = () => {
  const dispatch = useDispatch()

  const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
  // console.log(ProfileData);
  
  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
  }, [])
  return (
    <>
      <Navbar />

      <div className={Styles.profilecon}>
        <p></p>
        <div className={Styles.profilecol}>
          <p>Name : <span>{ProfileData?.username || ""}</span></p>
          <p>Age : <span>{ProfileData?.age || ""}</span></p>
          <p>Address : <span>{ProfileData?.adress || ""}</span></p>
          <p>Email : <span>{ProfileData?.email || ""}</span></p>
          <p>Phone No. : <span>{ProfileData?.phone || ""}</span></p>
          <p>Role : <span>{ProfileData?.role || ""}</span></p>

          <div className={Styles.profilebuttons}>
            <button>Edit</button>
          </div>
        </div>

        <div className={Styles.profilecol}>
          <p>Driving Licwnce No. : <span>{ProfileData?.dlnumber || ""}</span></p>
        </div>
      </div>
    </>
  )
}

export default ProfilePage