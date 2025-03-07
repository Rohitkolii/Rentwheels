import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCard from '../../Components/VehicleCard/VehicleCard'
import Styles from '../VehiclesPage/VehiclesPage.module.css'
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";





const Vehicles = () => {

  // const [vehicleListing, setVehicleListing] = useState(false)

  return (
    <>

      <header className={Styles.vehicleheader}>
      <Navbar />

      <div className={Styles.vehicleheader_in}>
        <h1>Our <span style={{color: "#0061ff"}}>Vehicles</span></h1>
        <p>Your Ride, Your Adventure – Choose. Rent. Drive!</p>
          
        </div>
      </header>

      <div className={Styles.vehiclefilter}>
            <div className={Styles.col}>
              <p>Select categories :</p>
              <div>
                <select name="vehicletype" id="vehicletype">
                  <option disabled value="select">Select Category</option>
                  <option value="Car">Car</option>
                  <option value="Car">Bike</option>
                  <option value="Car">Scooty</option>
                </select>
              </div>
            </div>

            <div className={Styles.col}>
                <p>Search Vehicle :</p>
              <div>
                <input placeholder='Search vehicles' type="text" />
                <button> Search </button>
              </div>
            </div>
          </div>

      <div className={Styles.Vehiclescontainer}>
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </>
  )
}

export default Vehicles