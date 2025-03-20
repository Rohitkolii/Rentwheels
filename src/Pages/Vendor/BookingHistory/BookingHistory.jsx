import React, {useEffect, useState} from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
// import Styles from '../BookingsPage/BookingsPage.module.css'
import Styles from '../../Admin/AdminBookings/AdminBookings.module.css'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import { fetchBookingList } from '../../../store/getBookingListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../../store/ProfileSlice'
const BookingHistory = () => {
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const dispatch  =useDispatch();

    useEffect(()=> {
        dispatch(fetchBookingList())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[])

    const bookingData = useSelector(state => state.BookingListSlice.data)
    const userProfile = useSelector(state => state.profileSlice.data.userData)
    // console.log(bookingData);
    // console.log(userProfile);

    const filteredbookingData = bookingData && bookingData.filter((booking)=> booking?.Vendor_id ==userProfile?._id )

    const [searchQuery, setSearchQuery] = useState("");
    
        // Filtering function
        const filteredBookingsS = filteredbookingData && filteredbookingData.filter(booking => {
            const query = searchQuery.toLowerCase();
            return (
                booking.Vehicle_name.toLowerCase().includes(query) ||
                booking.Vendor_id.toLowerCase().includes(query) ||
                booking.Vehicle_id.toLowerCase().includes(query) ||
                booking.Booking_User_id.toLowerCase().includes(query) ||
                booking.Vehicle_id.toLowerCase().includes(query) ||
                booking.Vehicle_type.toLowerCase().includes(query) ||
                booking.Vehicle_name.toLowerCase().includes(query) ||
                booking.Vehicle_type.toLowerCase().includes(query) ||
                booking.Vehicle_model.toLowerCase().includes(query) ||
                booking.Vehicle_rent.toLowerCase().includes(query) ||
                booking.Vehicle_average.toLowerCase().includes(query) ||
                booking.Vehicle_Booking_Date.toLowerCase().includes(query) ||
                booking.Vehicle_Dropof_Date.toLowerCase().includes(query) ||
                booking._id.toLowerCase().includes(query)
            );
        });
    
  
  return (
    <>
      <section className={Styles.adminbookings} style={{display:'flex'}}>
        <AdminSidebar 
        setSidebarVisiblity={setSidebarVisiblity}
        sidebarVisiblity={sidebarVisiblity} />
        <section style={{width: "100%"}}>
            <AdminNavabar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.bookingtable}>
            <div style={{width: "95%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
            <table>
                    <tr>
                        <th>S.No</th>
                        <th>b.Id</th>
                        <th>Vehicle & Name</th>
                        <th>customer</th>
                        <th>Vendor</th>
                        <th>Start to End</th>
                        <th>Price</th>
                        {/* <th>Status</th> */}
                    </tr>
                    {
                        filteredBookingsS.length ? filteredBookingsS.map((booking, i)=> {
                            return(
                                <tr key={booking._id}>
                                    <td>{i+1}</td>
                                    {/* <td title={booking._id}>{booking._id.substring(0,10)}</td> */}
                                    <td title={booking._id}>{booking._id.substring(0,10)}</td>
                                    <td>
                                        <img src={`${import.meta.env.VITE_URL}${booking.Vehicle_image}`} alt="" />
                                        <p>{booking.Vehicle_name}</p>
                                        {/* <p>025414</p> */}
                                    </td>
                                    <td title={booking.Booking_User_id}>{booking.Booking_User_id.substring(0,10)}...</td>
                                    <td title={booking.Vendor_id}>{booking.Vendor_id.substring(0,10)}</td>
                                    <td style={{minWidth: 150}}>{booking.Vehicle_Booking_Date} <br /> to <br /> {booking.Vehicle_Dropof_Date}</td>
                                    <td>₹ {booking.Vehicle_rent}</td>
                                    {/* <td style={{color: 'green'}}>Active</td> */}
                                </tr>
                            )
                        })
                        :
                        <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No Bookings Found!</h1>
                    }
                    
                </table>
            </div>
        </section>
      </section>
      
    </>
  )
}

export default BookingHistory