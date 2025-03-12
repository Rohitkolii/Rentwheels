import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCard from '../../Components/VehicleCard/VehicleCard'
import Styles from '../VehiclesPage/VehiclesPage.module.css'
import { CgMenuGridR } from "react-icons/cg";
import { FaList, FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const vehicledata = [
  {
    vehicle_id : 1,
    vehicle_type : "car",
    vehicle_name : "Suzuki",
    vehicle_model : "Suzuki",
    vehicle_rent : "2500",
    vehicle_image : "/images/cars/car1.jpg",
    vehicle_average : "25km/ltr",
  },
  {
    vehicle_id : 2,
    vehicle_type : "bike",
    vehicle_name : "Honda",
    vehicle_model : "Splender",
    vehicle_rent : "1400",
    vehicle_image : "/images/bikes/bike2.jpg",
    vehicle_average : "30km/ltr",
  },
  {
    vehicle_id : 3,
    vehicle_type : "car",
    vehicle_name : "Dacia",
    vehicle_model : "Duster",
    vehicle_rent : "1900",
    vehicle_image : "/images/cars/car2.jpg",
    vehicle_average : "25km/ltr",
  },
]



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
              <p>categories:</p>
              <div>
                <select name="vehicletype" id="vehicletype">
                  <option disabled value="select">Select</option>
                  <option value="Car">Car</option>
                  <option value="Car">Bike</option>
                  <option value="Car">Scooty</option>
                </select>
              </div>
            </div>

            <div className={Styles.col}>
                <p>Search:</p>
              <div>
                <input placeholder='Search vehicles' type="text" />
                <button> <FaSearch /> </button>
              </div>
            </div>
          </div>

      <div className={Styles.Vehiclescontainer}>
        {
          vehicledata && vehicledata.map((vehicle)=> <VehicleCard key={vehicle.vehicle_id} vehicle={vehicle}/>)
        }
      </div>
    </>
  )
}

export default Vehicles