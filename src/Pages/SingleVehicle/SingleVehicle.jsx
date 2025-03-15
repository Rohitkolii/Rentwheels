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

const SingleVehicle = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchSingleVehicle(id))
    },[])
    
    const SingleVehicleData = useSelector(state => state.SingleVehicleSlice.data)
    const SingleVehicleStatus = useSelector(state => state.SingleVehicleSlice.status)
    console.log("status", SingleVehicleStatus);
    

    return(
        <>
            <Navbar />
            {/* <h1>{id}</h1> */}
            {
                SingleVehicleStatus == 'loading' ? <h1 style={{textAlign: 'center', color: "#0061ff", textTransform: 'uppercase', margin: 50}}>Loading...</h1> 
                :
            <div className={Styles.viewVehicle_con}>
                <h3>Complete your booking</h3>
                {/* <h4>Maruti Suzuki - This in model name</h4> */}
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
            }
            <Footer />
        </>
    )
}

export default SingleVehicle;