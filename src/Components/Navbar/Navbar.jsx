import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Styles from '../Navbar/Navbar.module.css'
import { GiStoneWheel } from "react-icons/gi";
import { NavLink } from 'react-router';
import '../../App.css'



const Navbar = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const [profileStatus, setProfileStatus] = useState(false);

  return (
    <>
        <nav>
            <div className={Styles.logo}>
                <p>Rent<span>wheels</span> <span><GiStoneWheel /></span></p>
            </div>  
            <div className={Styles.navlinks}>
                <ul>
                    <li onClick={()=> setMenuStatus(!menuStatus)} style={{fontSize: 30,cursor: 'pointer'}}><AiOutlineMenu /></li>
                    <li onClick={()=> setProfileStatus(!profileStatus)}><img src="images/user.jpg" alt="profile" /></li>
                </ul>
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
                    <li><NavLink to="/">Contact</NavLink></li>
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
                            <li><NavLink to="/">Logout</NavLink></li>
                        </ul>
                    </div>
        : ''}
        
    </>
  )
}

export default Navbar;