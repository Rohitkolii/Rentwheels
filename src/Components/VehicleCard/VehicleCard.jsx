import React from 'react'
import Styles from '../VehicleCard/VehicleCard.module.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router';
import { MdKeyboardArrowRight } from "react-icons/md";



const VehicleCard = ({vehicle}) => {
  console.log(vehicle);
  
  return (
    <>
        <div className={Styles.VehicleCard}>
            <div className={Styles.Vehicleimg}>
                <img src={vehicle.vehicle_image} alt="" />
            </div>
            
            <div className={Styles.Vehicleinfo}>
                {/* <span>XYR7878QS</span> */}
                <div className={Styles.info_row1}>
                  <div>
                    <p><span>{vehicle.vehicle_name}</span></p>
                    <p><span>{vehicle.vehicle_model}</span></p>
                    <p>Average: <span>{vehicle.Vehicle_average}</span></p>
                  </div>
                  <div className={Styles.vehicleprice}>
                    {/* <p>Vehicle Rent</p> */}
                    <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />{vehicle.vehicle_rent}</span>
                    <p>For 3 days</p>
                  </div>
                </div>
                
                <div className={Styles.btn}>
                  <Link to={`${vehicle.vehicle_id}`}>Rent now</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default VehicleCard