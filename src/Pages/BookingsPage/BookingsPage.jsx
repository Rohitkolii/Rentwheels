import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Styles from '../BookingsPage/BookingsPage.module.css'
import { FaSearch } from "react-icons/fa";


const BookingsPage = () => {
  return (
    <>
        <Navbar />
        <div className={Styles.bookingcon}>
        <div className={Styles.bookingfilter}>
            
            <div>
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
                <select name="status" id="status">
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            <div className={Styles.searchinp}>
                <input type="text" />
                <button><FaSearch /></button>
            </div>
        </div>

        <div className={Styles.bookinglist_con}>
            <div className={Styles.bookinglist}>
               
            </div>
        </div>
        </div>
    </>
  )
}

export default BookingsPage