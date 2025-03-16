import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Styles from "../SingleVehicle/SingleVehicle.module.css"
import { IoCarOutline } from "react-icons/io5";
import { BiEqualizer } from "react-icons/bi";
import { FaRoute } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useEffect } from 'react';
import { fetchSingleVehicle } from '../../store/getSingleVehicleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../store/ProfileSlice';
import { addBooking } from '../../store/addBookingSlice';

const SingleVehicle = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchSingleVehicle(id))
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[id])
    
    const SingleVehicleData = useSelector(state => state.SingleVehicleSlice.data)
    const SingleVehicleStatus = useSelector(state => state.SingleVehicleSlice.status)
    const Booking_Userid = useSelector(state => state.profileSlice.data.userData)
    // console.log("vehicle", SingleVehicleData);
    // console.log("Booking_Userid", Booking_Userid.userData._id);

    const bookVehicle = (e) => {
        e.preventDefault();
        const data = {
                Vehicle_id: SingleVehicleData._id,
                Vendor_id: SingleVehicleData.user_id, //vedor id means who added that vehicle
                Booking_User_id: Booking_Userid._id,
                Vehicle_type: SingleVehicleData.Vehicle_type,
                Vehicle_name: SingleVehicleData.Vehicle_name,
                Vehicle_model: SingleVehicleData.Vehicle_model,
                Vehicle_rent: SingleVehicleData.Vehicle_rent,
                Vehicle_average: SingleVehicleData.Vehicle_average,
                Vehicle_image: SingleVehicleData.Vehicle_image,
                Vehicle_Booking_Date: "2025-03-20",
                Vehicle_Dropof_Date: "2025-03-25"
        }

        dispatch(addBooking(data))
        
    }
    

    return(
        <>
            <Navbar />
            {/* <h1>{id}</h1> */}
            {
                SingleVehicleStatus == 'loading' ? <h1 style={{textAlign: 'center', color: "#0061ff", textTransform: 'uppercase', margin: 50}}>Loading...</h1> 
                :
            <div className={Styles.viewVehicle_con}>
                <h3>Book your vehicle now</h3>
                {/* <h4>Maruti Suzuki - This in model name</h4> */}
                <p>Introducing our premium <span>{SingleVehicleData.Vehicle_name}</span>, a top-notch <span>{SingleVehicleData.Vehicle_model}</span> designed for comfort and efficiency. With an impressive fuel <span>average of {SingleVehicleData.Vehicle_average} km/l</span>, this vehicle ensures a smooth and economical ride. Available for <span>rent at just {SingleVehicleData.Vehicle_rent} per day</span>, you can book it for your desired time period at an affordable price. Whether it's a weekend getaway or a long trip, our reliable vehicle is ready to make your journey hassle-free. Reserve now and enjoy a seamless travel experience! 🚗💨</p> <br />
                <div className={Styles.viewVehicle_con_inn}>
                    <div className={Styles.viewVehicle_info}>
                        <div className={Styles.viewVehicle_img}>
                            <img src={`http://localhost:5000${SingleVehicleData.Vehicle_image}`} alt="" />
                        </div>

                        <div className={Styles.viewVehicle_info_2}>
                            <p><IoCarOutline />{SingleVehicleData.Vehicle_name}</p>
                            <p><BiEqualizer />{SingleVehicleData.Vehicle_model}</p>
                            <p><FaRoute />{SingleVehicleData.Vehicle_average}</p>
                            <p><MdOutlineCurrencyRupee />Rent : {SingleVehicleData.Vehicle_rent}</p>
                        </div>
                        
                    </div>

                    <div className={Styles.viewVehicle_payment}>
                        <p>Please choose the following Details!</p>
                        <form action="" className={Styles.vehicleForm}>
                            <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Pickup Date</label>
                                    <input onChange={(e)=> console.log(e.target.value)} type="date" name="" id="" />
                                </div>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Dropof Date</label>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>

                            {/* <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Pickup Time</label>
                                    <input type="time" name="" id="" />
                                </div>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Dropof time</label>
                                    <input type="time" name="" id="" />
                                </div>
                            </div> */}


                            {/* <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Days:</label>
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                        <option value="1">6</option>
                                        <option value="1">7</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className={Styles.formrow}>
                                {/* <div className={Styles.formcol}> */}
                                    <button onClick={bookVehicle}>Pay Now</button>
                                {/* </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            }
            <Footer />
        </>
    )
}

export default SingleVehicle;