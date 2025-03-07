import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import EngageModule from '../../Components/EngageModule/EngageModule'
import TechStack from '../../Components/TechStack/TechStack'
import Styles from '../HomePage/HomePage.module.css'
import { MdHomeRepairService } from "react-icons/md";
import { FaCar, FaEyeSlash } from 'react-icons/fa';
import { RiPassValidFill } from 'react-icons/ri';

const HomePage = () => {
  return (
    <>
        <Header />
        <TechStack />
        <section className={Styles.detailscon}>
          <div className={Styles.detailsconinner}>
            <div className={Styles.row1}>
              <div>
                <h1>Explore Our Fleet <br /> Find the Perfect Ride for You!</h1>
              </div>
              <div>
                <p className='sub'>At RentWheels, we make car rentals seamless, affordable, and hassle-free. Whether you need a car for a weekend getaway, a business trip, or everyday commuting, we’ve got the perfect ride for you. With a wide range of vehicles, flexible rental plans, and easy booking, your journey starts here. Rent. Ride. Repeat!</p>
              </div>
            </div>

            <div className={Styles.row2}>

              <div className={Styles.row2_first}>
                <img src="images/car1.png" alt="" />
              </div>

              <div className={Styles.row2inner}>
                <div className={Styles.row2inner_1}>
                  <img src="images/bg3.jpg" alt="" />
                </div>

                <div className={Styles.row2inner_2}>
                  <div>
                    <img src="images/singlecar.jpg" alt="" />
                  </div>
                  <div>
                    <img src="images/bg2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="images/bg1.jpg" alt="" />
                  </div>
                    </div>
                  </div>
              </div>
          </div>
        </section>
        <EngageModule />
        <Footer />
    </>
  )
}

export default HomePage