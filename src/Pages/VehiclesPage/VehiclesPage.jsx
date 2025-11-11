import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VehicleCard from '../../Components/VehicleCard/VehicleCard'
import Styles from '../VehiclesPage/VehiclesPage.module.css'
import { FaSearch } from "react-icons/fa";
import { fetchVehicleList } from '../../store/getVehicleSlice';
import {useDispatch, useSelector} from "react-redux"
import Footer from '../../Components/Footer/Footer';
import { fetchFeedback } from '../../store/getFeedbackSlice';


const Vehicles = () => {

  const dispatch = useDispatch()

  const vehicledata = useSelector(state => state.getVehicleSlice.data)
  const loadingStatus = useSelector(state => state.getVehicleSlice.status)
  const filteredVehicleData = vehicledata && vehicledata.filter((vehicle)=> vehicle?.isBooked === false)


  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [Vehiclelength, setVehiclelength] = useState(6);

  useEffect(()=> {
    dispatch(fetchVehicleList())
    dispatch(fetchFeedback())
  }, [])

   // Filtering logic
  const filteredVehicles = filteredVehicleData.filter(vehicle => {
    const matchesName = vehicle.Vehicle_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? vehicle.Vehicle_type === selectedType : true;

    return matchesName && matchesType;
  });

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
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} name="vehicletype" id="vehicletype">
                  <option value="">All</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="scooty">Scooty</option>
                </select>
              </div>
            </div>

            <div className={Styles.col}>
                <p>Search:</p>
              <div>
                <input onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search vehicles' type="text" />
                <button> <FaSearch /> </button>
              </div>
            </div>
          </div>
          {     
            filteredVehicles.length != 0 ?
          <div className={Styles.Vehiclescontainer}>
            {
              filteredVehicles.slice(0,Vehiclelength).map((vehicle)=> <VehicleCard key={vehicle._id} vehicle={vehicle}/>) 
            }
          </div>
          :
          <div className={Styles.notfound}>
              <img src="images/re.webp" alt="" />
              <p>No Vehicles Found!</p>
          </div>
          }

      {
        filteredVehicles.length > 6 &&
        <div className={Styles.showmorebtn}>
          {
            Vehiclelength === filteredVehicles.length ?
            <button onClick={()=> setVehiclelength(6)}>Show less</button>
            :
            <button onClick={()=> setVehiclelength(filteredVehicles.length)}>Show More</button>
          }
        </div>
        }

      <Footer />
    </>
  )
}

export default Vehicles