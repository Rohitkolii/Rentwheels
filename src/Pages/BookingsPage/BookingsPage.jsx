import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Styles from '../BookingsPage/BookingsPage.module.css'
import { FaRupeeSign, FaSearch } from "react-icons/fa";
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingList } from '../../store/getBookingListSlice';
import { fetchUserProfile } from '../../store/ProfileSlice';


const BookingsPage = () => {

    const dispatch  = useDispatch();
    // const [userid, setuserid] = useState()

    useEffect(()=> {
        dispatch(fetchBookingList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[])

    const userid = useSelector(state => state.profileSlice.data.userData)
    const bookingData = useSelector(state => state.BookingListSlice.data)
    console.log(bookingData);
    console.log(userid);
    

    const filteredbookingData = bookingData && bookingData.filter((booking)=> booking?.Booking_User_id === userid?._id)
    // console.log(filteredbookingData);
    

  return (
    <>
        <Navbar />
        <div className={Styles.bookingcon}>
            <div className={Styles.bookingfilter}>
                
                <div className={Styles.filtercol1}>
                    <div>
                        <label htmlFor="">Suppliers:</label>
                        <select name="status" id="status">
                            <option value="Supplier1">Supplier 1</option>
                            <option value="Supplier1">Supplier 2</option>
                            <option value="Supplier1">Supplier 3</option>
                            <option value="Supplier1">Supplier 4</option>
                            <option value="Supplier1">Supplier 5</option>
                            <option value="Supplier1">Supplier 6</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="">Status:</label>
                        <select name="status" id="status">
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>
                    
                <div className={Styles.searchinp}>
                    <label htmlFor="">Search:</label>
                    <div>
                        <input type="text" placeholder='search booking'/>
                        <button><FaSearch /></button>
                    </div>
                </div>
            </div>

            <div className={Styles.booking_con}>
                {/* <p>Bookings</p> */}
                <div className={Styles.booking_con_inner}>
                
                    {
                        filteredbookingData && filteredbookingData.map((booking)=> {
                            return <div className={Styles.VehicleCard}>
                            <div className={Styles.Vehicleimg}>
                                <img src={`http://localhost:5000${booking.Vehicle_image}`} alt="" />
                            </div>
                            
                            <div className={Styles.Vehicleinfo}>
                                {/* <span>XYR7878QS</span> */}
                                <div className={Styles.info_row1}>
                                    <div>
                                    <p><span>{booking.Vehicle_name}</span></p>
                                    <p><span>{booking.Vehicle_model}</span></p>
                                    <p>Average: <span>{booking.Vehicle_average} kmpl</span></p>
                                    </div>
                                    <div className={Styles.Vehicleprice}>
                                    {/* <p>Vehicle Rent</p> */}
                                    <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />{booking.Vehicle_rent}</span>
                                    <p>For 3 days</p>
                                    </div>
                                </div>
                                
                                <div className={Styles.btn}>
                                    <Link to='/'>View Details</Link>
                                </div>
                            </div>
                        </div>
                        })
                    }

                

                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default BookingsPage