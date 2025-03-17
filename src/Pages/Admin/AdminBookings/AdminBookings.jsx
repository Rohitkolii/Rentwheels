import React, {useEffect, useState} from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
// import Styles from '../BookingsPage/BookingsPage.module.css'
import Styles from './AdminBookings.module.css'
import AdminNavabar from '../../../Components/AdminNavbar/AdminNavabar'
import { fetchBookingList } from '../../../store/getBookingListSlice'
import { useDispatch, useSelector } from 'react-redux'
const AdminBookings = () => {
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const dispatch  =useDispatch();

    useEffect(()=> {
        dispatch(fetchBookingList())
    },[])

    const bookingData = useSelector(state => state.BookingListSlice.data)
    console.log(bookingData);
    
  
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
                        bookingData && bookingData.map((booking, i)=> {
                            return(
                                <tr key={booking._id}>
                                    <td>{i+1}</td>
                                    <td title={booking._id}>{booking._id.substring(0,10)}</td>
                                    <td>
                                        <img src={`http://localhost:5000${booking.Vehicle_image}`} alt="" />
                                        <p>{booking.Vehicle_name}</p>
                                        {/* <p>025414</p> */}
                                    </td>
                                    <td title={booking.Booking_User_id}>{booking.Booking_User_id.substring(0,10)}</td>
                                    <td title={booking.Vendor_id}>{booking.Vendor_id.substring(0,10)}</td>
                                    <td style={{minWidth: 150}}>{booking.Vehicle_Booking_Date} <br /> to <br /> {booking.Vehicle_Dropof_Date}</td>
                                    <td>₹ {booking.Vehicle_rent}</td>
                                    {/* <td style={{color: 'green'}}>Active</td> */}
                                </tr>
                            )
                        })
                    }
                    
                </table>
            </div>
        </section>
      </section>
      
    </>
  )
}

export default AdminBookings