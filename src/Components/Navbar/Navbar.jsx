import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Styles from '../Navbar/Navbar.module.css'
import { GiStoneWheel } from "react-icons/gi";
import { NavLink, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../store/ProfileSlice'
// import { useNavigate } from 'react-router';
import '../../App.css'
import { toast } from 'react-toastify';



const Navbar = () => {

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const [menuStatus, setMenuStatus] = useState(false);
    const [islogin, setislogin] = useState(false);
    const [profileStatus, setProfileStatus] = useState(false);

    useEffect(()=> {
        dispatch(fetchUserProfile(localStorage.getItem("token")))
        if(localStorage.getItem("token")){
            setislogin(true)
        }
    },[islogin])

    

    const ProfileData = useSelector((state)=> state.profileSlice.data.userData)
    // console.log("Navbar",ProfileData);
    
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
        // navigate("/login")
    }


  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <NavLink to='/'>
                    <img src={"images/RentWheels.png" && "/images/RentWheels.png"} alt="" />
                </NavLink>
            </div>  
            <div className={Styles.navlinks}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/bookings">Bookings</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {/* <li><NavLink to="/">Contact</NavLink></li> */}
                    {
                        islogin ?
                        <li className={Styles.profilelogo} onClick={()=> setProfileStatus(!profileStatus)}>
                            <img src="/images/user2.jpg" alt="profile" />
                            <div>
                                <p>{ProfileData?.username}</p>
                                <p>{ProfileData?.email}</p>
                            </div>
                        </li>
                        :
                        <li className={Styles.btn}><NavLink to="/login">Login</NavLink></li>
                    }
                </ul>
            </div>  
            <div className={Styles.mobextra}>
                {
                    islogin ?
                    <li className={Styles.profilelogo} onClick={()=> setProfileStatus(!profileStatus)}>
                    <img src="/images/user.jpg" alt="profile" />
                    <div className={Styles.userinfo}>
                        <p>{ProfileData?.username}</p>
                        <p>{ProfileData?.email}</p>
                    </div>
                </li>
                    :
                    <li className={Styles.btn}><NavLink to="/login">Login</NavLink></li>
                }
                <li className={Styles.hammenu} onClick={()=> setMenuStatus(!menuStatus)} style={{fontSize: 30,cursor: 'pointer'}}><AiOutlineMenu /></li>
            </div>
        </nav>
        {
            menuStatus ?
            <div className={Styles.dymanu}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/bookings">Bookings</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {/* <li><NavLink to="/">Contact</NavLink></li> */}
                </ul>
            </div>
        : ''}

        {
            menuStatus ? <div onClick={()=> setMenuStatus(!menuStatus)} className ={Styles.overlay}></div> : ''
        }

        {
            profileStatus ? <div onClick={()=> setProfileStatus(!profileStatus)} className ={Styles.overlay}></div> : ''
        }

        {
                profileStatus ?
                <div className={Styles.profilemenu}>
                        <ul>
                            <li><NavLink to="/Profile">Profile</NavLink></li>
                            <li><NavLink onClick={logoutUser} to="/login">Logout</NavLink></li>
                            {/* <li><NavLink to="/">Logout</NavLink></li> */}
                        </ul>
                    </div>
        : ''}
        
    </>
  )
}

export default Navbar;