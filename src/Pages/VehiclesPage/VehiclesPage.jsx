import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCard from '../../Components/VehicleCard/VehicleCard'
import Styles from '../VehiclesPage/VehiclesPage.module.css'
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";





const Vehicles = () => {

  const [vehicleListing, setVehicleListing] = useState(false)

  return (
    <>
      <Navbar />
      <div className={Styles.vehiclefilter}>
        <div className={Styles.col}>
          {
            vehicleListing ?
            <div onClick={()=> setVehicleListing(!vehicleListing)}><FaList /></div>
            :
            <div onClick={()=> setVehicleListing(!vehicleListing)}><CgMenuGridR /></div>
          }
          <div>
            <select name="vehicletype" id="vehicletype">
              <option value="Car">Car</option>
              <option value="Car">Bike</option>
              <option value="Car">Scooty</option>
            </select>
          </div>
        </div>

        <div className={Styles.col}> 
          <input placeholder='Search vehicles' type="text" />
          <button>< IoSearchSharp /> </button>
        </div>
      </div>

      <div className={Styles.Vehiclescontainer}>
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </>
  )
}

export default Vehicles