import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Styles from '../ProfilePage/ProfilePage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../store/ProfileSlice'
import { toast } from 'react-toastify'

const ProfilePage = () => {
  const dispatch = useDispatch()

  const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
  console.log(ProfileData);

  const [EditUSer,setEditUSer] = useState(false)
  const [name,setname] = useState(ProfileData?.username)
  const [age,setage] = useState(ProfileData?.age)
  const [pass,setpass] = useState()
  const [phone,setphone] = useState(ProfileData?.phone)
  const [dl,setdl] = useState(ProfileData?.dlnumber)
  const [add,setadd] = useState(ProfileData?.adress)
  const [email,setemail] = useState(ProfileData?.email)

  const setDetails = () => {
    setEditUSer(true)
    setname(ProfileData?.username)
    setage(ProfileData?.age)
    setphone(ProfileData?.phone)
    setdl(ProfileData?.dlnumber)
    setadd(ProfileData?.adress)
    setemail(ProfileData?.email)
  }

  const updateUser = async (e) => {
    e.preventDefault();
    
    const id = ProfileData?._id;
    const data = {
      username: name,
      email: email,
      phone: phone,
      password: pass,
      adress: add,
      dlnumber: dl,
      age: age
    }
try {
  await fetch(`${import.meta.env.VITE_URL}/api/auth/update/${id}`,{
      method: "PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
  })
  toast.success('Profile updated Successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setEditUSer(false)
} catch (error) {
  toast.error('Something went wrong!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}
} 
               
  
  useEffect(()=> {
    dispatch(fetchUserProfile(localStorage.getItem("token")))
    
  }, [ProfileData])
  return (
    <>
      <Navbar />

      <div className={Styles.profilecon}>
        <h2>PROFILE PAGE</h2>
        <div className={Styles.profilecol}>
          <p>Name : <span>{ProfileData?.username || ""}</span></p>
          <p>Age : <span>{ProfileData?.age || ""}</span></p>
          <p>Address : <span>{ProfileData?.adress || ""}</span></p>
          <p>Email : <span>{ProfileData?.email || ""}</span></p>
          <p>Phone No. : <span>{ProfileData?.phone || ""}</span></p>
          <p>Role : <span>{ProfileData?.role || ""}</span></p>

          <div className={Styles.profilebuttons}>
            <button onClick={()=> setDetails()}>Edit</button>
          </div>
        </div>

        <div className={Styles.profilecol}>
          <p>Driving Licwnce No. : <span>{ProfileData?.dlnumber || ""}</span></p>
        </div>
      </div>
      {
        EditUSer ?
        <form onSubmit={updateUser} className={Styles.EditUSer}>
          <p>UPDATE USER</p>
          <div className={Styles.row}>
            <div className={Styles.col}>
              <label htmlFor="">Name:</label>
              <input value={name} onChange={(e)=> setname(e.target.value)} placeholder='username' type="text" />
            </div>
            <div className={Styles.col}>
              <label htmlFor="">Age:</label>
              <input value={age} onChange={(e)=> setage(e.target.value)} placeholder='your new age' type="number" />
            </div>
          </div>
          <div className={Styles.row}>
            <div className={Styles.col}>
              <label htmlFor="">Email:</label>
              <input value={email} onChange={(e)=> setemail(e.target.value)} placeholder="example@gmail.com" type="email" />
            </div>
            <div className={Styles.col}>
              <label htmlFor="">Phone:</label>
              <input value={phone} onChange={(e)=> setphone(e.target.value)} placeholder="ex. 91 0252014222" type="number" />
            </div>
          </div>
          <div className={Styles.row}>
            <div className={Styles.col}>
              <label htmlFor="">Password:</label>
              <input value={pass} onChange={(e)=> setpass(e.target.value)} placeholder="New Password" type="text" />
            </div>
            <div className={Styles.col}>
              <label htmlFor="">DL. Number:</label>
              <input value={dl} onChange={(e)=> setdl(e.target.value)} placeholder="Dl number" type="text" />
            </div>
          </div>
          <div className={Styles.row}>
            <div className={Styles.col}>
              <label htmlFor="">Address:</label>
              <input value={add} onChange={(e)=> setadd(e.target.value)} placeholder={"your address"} type="text" />
            </div>
            <div className={Styles.col}>
              <label htmlFor="">Role:</label>
              <input disabled value={ProfileData?.role} type="text" />
            </div>
          </div>
          <div className={Styles.row}>
            <div className={Styles.col}>
            <input onClick={()=> setEditUSer(false)} type="button" value="CANCEL" />
            </div>
            <div className={Styles.col}>
            <input type="submit" value="UPDATE" />
            </div>
          </div>

        </form>
        :
        ''
      }

      {EditUSer &&
        <div onClick={()=> setEditUSer(false)} className={Styles.editoverlay}></div>
      }
    </>
  )
}
export default ProfilePage