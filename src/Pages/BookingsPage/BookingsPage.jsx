import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Styles from '../BookingsPage/BookingsPage.module.css'
import { FaRupeeSign, FaSearch } from "react-icons/fa";
import { Link } from 'react-router';


const BookingsPage = () => {
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
                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>

                <div className={Styles.VehicleCard}>
                    <div className={Styles.Vehicleimg}>
                        <img src="images/cars/car2.jpg" alt="" />
                    </div>
                    
                    <div className={Styles.Vehicleinfo}>
                        {/* <span>XYR7878QS</span> */}
                        <div className={Styles.info_row1}>
                            <div>
                            <p><span>Maruti Suzuki Dzire</span></p>
                            <p><span>Dzire LXi 1197 cc</span></p>
                            <p>Average: <span>24.79 kmpl</span></p>
                            </div>
                            <div className={Styles.Vehicleprice}>
                            {/* <p>Vehicle Rent</p> */}
                            <span style={{display: 'flex', alignItems: 'center'}}><FaRupeeSign />1600</span>
                            <p>For 3 days</p>
                            </div>
                        </div>
                        
                        <div className={Styles.btn}>
                            <Link to='/'>View Details</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default BookingsPage