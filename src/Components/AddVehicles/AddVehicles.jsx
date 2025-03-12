import React from 'react'
import Styles from '../AddVehicles/AddVehicles.module.css'
import { PiSteeringWheelBold } from "react-icons/pi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { FaRegImage } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { BiEqualizer } from "react-icons/bi";


const AddVehicles = () => {
  return (
    <>
        <form className={Styles.AddVehiclecon}>
            <p style={{fontWeight: 500, color: '#007dfe'}}>Add Vehicles</p>
            <div className={Styles.row}>

                <div className={Styles.col}>
                    <label htmlFor=""><PiSteeringWheelBold />vehicle type</label>
                    <select name="vehicletype" id="vehicletype">
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="scooty">Scooty</option>
                    </select>
                </div>

                <div className={Styles.col}>
                    <label htmlFor=""><MdDriveFileRenameOutline />Vehicle name</label>
                    <input placeholder='ex- Maruti Suzuki' type="text" />
                </div>

                <div className={Styles.col}>
                    <label htmlFor=""><IoLogoModelS />Model</label>
                    <input placeholder='enter model number' type="text" />
                </div>

                <div className={Styles.col}>
                    <label for='fileupload'><FaRegImage />Upload image</label>
                    <input id='fileupload' type="file" />
                </div>


                <div className={Styles.col}>
                    <label htmlFor=""><BiEqualizer />Average</label>
                    <input placeholder='enter vehicle average' type="text" />
                </div>

                <div className={Styles.col}>
                    <label htmlFor=""><MdCurrencyRupee />Rent / 3days</label>
                    <input placeholder='ex- 2200' min="500" max="15000" type="number" />
                </div>
                <div className={Styles.col}>
                    <input className={Styles.btn} type="submit" value="Add vehicle" />
                </div>
            </div>
        </form>
    </>
  )
}

export default AddVehicles