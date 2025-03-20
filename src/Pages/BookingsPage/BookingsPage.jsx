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
    
    useEffect(()=> {
        dispatch(fetchBookingList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[])

    const userid = useSelector(state => state.profileSlice.data.userData)
    const bookingData = useSelector(state => state.BookingListSlice.data)
    console.log(bookingData);
    // console.log(userid);
    
    
    const filteredbookingData = bookingData && bookingData.filter((booking)=> booking?.Booking_User_id === userid?._id)
    // console.log(filteredbookingData);

    const [searchQuery, setSearchQuery] = useState("");
      const [selectedType, setSelectedType] = useState("");
    
    const filteredVehicles = filteredbookingData.filter(booking => {
        const matchesName = booking.Vehicle_name.toLowerCase().includes(searchQuery.toLowerCase());
        let matchesType;
        if(selectedType == 'a'){
            matchesType = booking.Vehicle_Dropof_Date > new Date().toISOString().split('T')[0];
        }else if(selectedType == 'e'){
            matchesType = booking.Vehicle_Dropof_Date < new Date().toISOString().split('T')[0];
        }else{
            matchesType = true;
        }
    
        return matchesName && matchesType;
      });

    //   console.log("new Date : ", new Date().toISOString().split('T')[0]);
      

  return (
    <>
        <Navbar />
        <div className={Styles.bookingcon}>
            <h1>Bookings</h1>
            <div className={Styles.bookingfilter}>
                
                <div className={Styles.filtercol1}>
                    
                    <div>
                        <label htmlFor="">Status:</label>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} name="status" id="status">
                            <option value="">All</option>
                            <option value="a">Available</option>
                            <option value="e">Expired</option>
                        </select>
                    </div>
                </div>
                    
                <div className={Styles.searchinp}>
                    <label htmlFor="">Search:</label>
                    <div>
                        <input onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='search booking'/>
                        <button><FaSearch /></button>
                    </div>
                </div>
            </div>

            <div className={Styles.booking_con}>
                {
                    filteredVehicles.length ?
                    <div className={Styles.booking_con_inner}>
                    {
                        filteredVehicles.map((booking)=> {
                            return <div key={booking._id} className={Styles.VehicleCard}>
                            <div className={Styles.Vehicleimg}>
                                <img src={`${import.meta.env.VITE_URL}${booking.Vehicle_image}`} alt="" />
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
                                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'right'}}><FaRupeeSign />{booking.Vehicle_rent}</span>
                                    {/* <p>{booking.Vehicle_Booking_Date}</p> */}
                                    {/* <p>to</p> */}
                                    <p>Dropof: {booking.Vehicle_Dropof_Date}</p>
                                    </div>
                                </div>
                                
                                <div className={Styles.btn}>
                                    {/* <Link to='/'>View Details</Link> */}
                                    <span style={booking?.Vehicle_Dropof_Date > new Date().toISOString().split('T')[0] ? {background: '#399918'} : {background: 'red'}}>{booking?.Vehicle_Dropof_Date > new Date().toISOString().split('T')[0] ? "Yours" : "Expired"}</span>
                                </div>
                            </div>
                        </div>
                        })
                    }    
                    </div>

                    :

                    <div className={Styles.notfound}>
                        <img src="images/re.webp" alt="" />
                        <p>No Booking Found!</p>
                    </div>
                }
            </div>
        </div>
        <Footer />
    </>
  )
                        
}

export default BookingsPage