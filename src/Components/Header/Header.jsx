import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from '../Header/Header.module.css'
import {FaGithub, FaInstagram } from "react-icons/fa6";
// import { FaNavLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";




import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router';


const Header = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className={Styles.head}>
                <div className={Styles.glow}></div>
        <Navbar />
        <section className={Styles.header} data-aos="fade-down">
            <div className={Styles.innerheader}>
            <ul style={{zIndex: -9}} className={Styles.dytext}>
                  <li><h2>Rent a Car</h2></li>
                  <li><h2>Rent a Bike</h2></li>
                  <li><h2>Rent a Scooty</h2></li>
                  <li><h2>Rent any vehicle</h2></li>
                </ul>
                <h1>Rent a <span style={{color: '#0061ff'}}>Vehicle</span> Now</h1>
                <p>Fast, affordable, and hassle-free car rentals for every journey. Pick your ride, hit the road, and enjoy the drive—whenever you need it!</p>
                  
                  <div className={Styles.btncon}>
                    {/* <NavLink to='/services'>Services</NavLink> */}
                    <NavLink to='/contact'>Connect <MdKeyboardArrowRight /></NavLink>
                    <NavLink to='/vehicles'>Rent Vehicle <MdKeyboardArrowRight /></NavLink>
                  </div>
            </div>

            <div className={Styles.imgcol}>
              <img src="images/supcar1.png" alt="" />
              {/* <img src="images/supbike2.png" alt="" /> */}
            </div>

            <div className={Styles.dd}></div>

        </section>
    </div>
  )
}

export default Header