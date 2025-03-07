import React from 'react'
import Styles from '../VehicleCard/VehicleCard.module.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router';
import { MdKeyboardArrowRight } from "react-icons/md";



const VehicleCard = () => {
  return (
    <>
        <div className={Styles.VehicleCard}>
            <div className={Styles.Vehicleimg}>
                <img src="images/bg4.jpg" alt="" />
            </div>
            
            <div className={Styles.Vehicleinfo}>
                {/* <span>XYR7878QS</span> */}
                <div className={Styles.info_row1}>
                  <div>
                    <p><span>Maruti Suzuki Dzire</span></p>
                    <p><span>Dzire LXi 1197 cc</span></p>
                    <p>Average: <span>24.79 kmpl</span></p>
                  </div>
                  <div className={Styles.Vehicleprice}>
                    <p>Vehicle Rent</p>
                    <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                    <p>For 3 days</p>
                  </div>
                </div>
                
                <div className={Styles.btn}>
                  <Link to='/'>Rent now<MdKeyboardArrowRight /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default VehicleCard