import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
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

        <div className={Styles.bookingtable_con}>
            <div className={Styles.bookingtable}>
                <table>
                    <tr>
                        <th>S.No.</th>
                        <th>Vehicle & Name</th>
                        <th>Start to End</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/supcar1.png" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/supcar2.png" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/bg2.jpg" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/supcar3.png" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/supcar2.png" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/bg2.jpg" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="images/supcar3.png" alt="" />
                            <p>Super Delux</p>
                            <p>025414</p>
                        </td>
                        <td>01/01/2025 <br /> to <br /> 15/03/2025</td>
                        <td>1800RS</td>
                        <td style={{color: 'green'}}>Active</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default BookingsPage