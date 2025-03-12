import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Styles from "../SingleVehicle/SingleVehicle.module.css"
import { IoCarOutline } from "react-icons/io5";
import { BiEqualizer } from "react-icons/bi";
import { FaRoute } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const SingleVehicle = () => {
    const { id } = useParams()
    return(
        <>
            <Navbar />
            {/* <h1>{id}</h1> */}
            <div className={Styles.viewVehicle_con}>
                <h3>Complete your booking</h3>
                {/* <h4>Maruti Suzuki - This in model name</h4> */}
                <div className={Styles.viewVehicle_con_inn}>
                    <div className={Styles.viewVehicle_info}>
                        <div className={Styles.viewVehicle_img}>
                            <img src="/images/cars/car1.jpg" alt="" />
                        </div>

                        <div className={Styles.viewVehicle_info_2}>
                            <p><IoCarOutline />Maruti Suzuki</p>
                            <p><BiEqualizer />Maruti Suzuki name with model</p>
                            <p><FaRoute />Average : 25 kmpl</p>
                            <p><MdOutlineCurrencyRupee />Rent : 22000</p>
                        </div>
                    </div>

                    <div className={Styles.viewVehicle_payment}>
                        <p>Please choose the following Details!</p>
                        <form action="" className={Styles.vehicleForm}>
                            <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Pickup Date</label>
                                    <input type="date" name="" id="" />
                                </div>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Dropof Date</label>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>

                            <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Pickup Time</label>
                                    <input type="time" name="" id="" />
                                </div>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Dropof time</label>
                                    <input type="time" name="" id="" />
                                </div>
                            </div>
                            <div className={Styles.formrow}>
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
                            </div>
                            <div className={Styles.formrow}>
                                {/* <div className={Styles.formcol}> */}
                                    <button>Pay Now</button>
                                {/* </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleVehicle;