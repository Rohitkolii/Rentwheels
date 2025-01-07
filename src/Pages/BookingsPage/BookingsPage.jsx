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

        <div className={Styles.bookingtable}>
            <table>
                <tr>
                    <th>Supplier</th>
                    <th>Vehicle Type</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>to</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>

                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td style={{color: 'green', borderRadius: 24, padding: 5}}>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Ajit Enterprise</td>
                    <td>Car</td>
                    <td>Suzuki Dezire</td>
                    <td>01/01/2025</td>
                    <td>07/01/2025</td>
                    <td>1800RS</td>
                    <td>Active</td>
                </tr>
            </table>
        </div>
        </div>
    </>
  )
}

export default BookingsPage