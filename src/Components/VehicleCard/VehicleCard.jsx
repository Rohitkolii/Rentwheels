import React from 'react'
import Styles from '../VehicleCard/VehicleCard.module.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router';


const VehicleCard = () => {
  return (
    <>
        <div className={Styles.VehicleCard}>
            <div className={Styles.Vehicleimg}>
                <img src="images/singlecar.jpg" alt="" />
            </div>
            
            <div className={Styles.Vehicleinfo}>
                {/* <span>XYR7878QS</span> */}
                <div style={{display:'flex', justifyContent: 'space-between', padding: "0px 30px 0px 0px"}}>
                  <p className={Styles.Vehicletag}><span>XYR7878QS</span><span>Car</span></p> <br />
                  <div className={Styles.Vehicleprice}>
                    <p>Vehicle Rent</p>
                    <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                    <p>For 3 days</p>
                  </div>
                </div>
                <p style={{fontWeight: 500, fontSize: 18}}><span>Maruti Suzuki Dzire</span></p>
                <p><span>Dzire LXi 1197 cc, Petrol, Manual, 24.79 kmpl, 80 bhp</span></p>
                <p>Average: <span>24.79 kmpl</span></p>
                <br />
                <Link to='/'>Book fot Rent</Link>
            </div>
        </div>
    </>
  )
}

export default VehicleCard