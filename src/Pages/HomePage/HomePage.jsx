import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import EngageModule from '../../Components/EngageModule/EngageModule'
import TechStack from '../../Components/TechStack/TechStack'
import Styles from '../HomePage/HomePage.module.css'
import { MdHomeRepairService } from "react-icons/md";
import { FaCar, FaEyeSlash, FaRupeeSign } from 'react-icons/fa';
import { RiPassValidFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux'
import { fetchVehicleList } from '../../store/getVehicleSlice'
import Stylesc from '../../Components/VehicleCard/VehicleCard.module.css'
import { Link } from 'react-router'
import Loading from '../../Components/Loading/Loading'
import Head from '../../Components/Head/Head'

const HomePage = () => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchVehicleList())
  },[])

  const Loadingstatus = useSelector(state => state.getVehicleSlice.status)
  const featuredVehicle = useSelector(state => state.getVehicleSlice.data)
  const filterfeaturedVehicle = featuredVehicle && featuredVehicle.filter((v)=> v.isBooked === false)
  // console.log(filterfeaturedVehicle);
  

  return (
    <>
        {/* <Header /> */}
        <Head />
        <TechStack />
        <section className={Styles.latestCon}>
          <div className={Styles.latestConInn}>
          <h1>Latest Added</h1>
          <p style={{marginBottom: 15}}>Redefining the road with innovation, power, and style!</p>
            <div className={Styles.grid}>
              {
                Loadingstatus === "loading" ? <h1>Loading...</h1> : ""
              }
              {
                filterfeaturedVehicle ? filterfeaturedVehicle.slice(0,3).map((vehicle)=> {
                  return(
                          <div key={vehicle._id} className={Stylesc.VehicleCard}>
                            <div className={Stylesc.Vehicleimg}>
                                <img src={`${import.meta.env.VITE_URL}${vehicle.Vehicle_image}`} alt="" />
                            </div>
                            
                            <div className={Stylesc.Vehicleinfo}>
                                {/* <span>XYR7878QS</span> */}
                                <div className={Stylesc.info_row1}>
                                  <div>
                                    <p><span>{vehicle.Vehicle_name}</span></p>
                                    <p><span>{vehicle.Vehicle_model}</span></p>
                                    <p>Average: <span>{vehicle.Vehicle_average}</span> kmpl</p>
                                  </div>
                                  <div className={Stylesc.vehicleprice}>
                                    {/* <p>Vehicle Rent</p> */}
                                    <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />{vehicle.Vehicle_rent}</span>
                                    <p>per day</p>
                                  </div>
                                </div>
                                
                                <div className={Stylesc.btn}>
                                  <Link to={`vehicles/${vehicle._id}`}>Rent now</Link>
                                </div>
                            </div>
                          </div>
                  )
                } 
                // <VehicleCard vehicle={vehicle} />
              ):""
              }
            </div>
          </div>
        </section>
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
                  <img src="images/bg3.webp" alt="" />
                </div>

                <div className={Styles.row2inner_2}>
                  <div>
                    <img src="images/singlecar.webp" alt="" />
                  </div>
                  <div>
                    <img src="images/bg2.webp" alt="" />
                  </div>
                  <div>
                    <img src="images/bg1.webp" alt="" />
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