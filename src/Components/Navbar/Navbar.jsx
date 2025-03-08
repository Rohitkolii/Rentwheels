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
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <NavLink to='/'>
                    <img src="images/RentWheels.png" alt="" />
                </NavLink>
            </div>  
            <div className={Styles.navlinks}>
                <ul>
                    {/* <li><NavLink to="/">Home</NavLink></li> */}
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/bookings">Bookings</NavLink></li>
                    <li><NavLink to="/addvehicle">Add Vehicle</NavLink></li>
                    <li><NavLink to="/editvehicle">Update Vehicle</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                    <li className={Styles.btn}><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>  
            <div style={{display: 'flex', alignItems: 'center', listStyle: 'none', gap: 20}}>
                <li className={Styles.hammenu} onClick={()=> setMenuStatus(!menuStatus)} style={{fontSize: 30,cursor: 'pointer'}}><AiOutlineMenu /></li>
                <li className={Styles.profilelogo} onClick={()=> setProfileStatus(!profileStatus)}><img src="images/user.jpg" alt="profile" /></li>
            </div>
        </nav>
        {
            menuStatus ?
            <div className={Styles.dymanu}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/vehicles">Vehicles</NavLink></li>
                    <li><NavLink to="/addvehicle">Add Vehicle</NavLink></li>
                    <li><NavLink to="/editvehicle">Update Vehicle</NavLink></li>
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
                            {/* <li><NavLink to="/">Logout</NavLink></li> */}
                        </ul>
                    </div>
        : ''}
        
    </>
  )
}

export default Navbar;