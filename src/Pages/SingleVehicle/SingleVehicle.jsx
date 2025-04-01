import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Styles from "../SingleVehicle/SingleVehicle.module.css"
import { IoCarOutline } from "react-icons/io5";
import { BiEqualizer } from "react-icons/bi";
import { FaRoute } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useEffect, useState } from 'react';
import { fetchSingleVehicle } from '../../store/getSingleVehicleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../store/ProfileSlice';
import { RiFeedbackLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { addBooking } from "../../store/addBookingSlice";



import { toast } from 'react-toastify';
import { fetchFeedback } from '../../store/getFeedbackSlice';
// import PaymentGateway from '../../Components/PaymentGateway/PaymentGateway';

const SingleVehicle = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[bookingDate, setBookingDate] = useState("");
    const[dropofDate, setDropofDate] = useState("");
    const[DisplayFeed, setDisplayFeed] = useState(false);
    const[FeedbackMessage, setFeedbackMessage] = useState("");

    const SingleVehicleData = useSelector(state => state.SingleVehicleSlice.data)
    const Feedbacks = useSelector(state => state.FeedbackSlice.data)
    const SingleVehicleStatus = useSelector(state => state.SingleVehicleSlice.status)
    const Booking_Userid = useSelector(state => state.profileSlice.data.userData)
    // console.log("vehicle", SingleVehicleData);
    // console.log("Booking_Userid", Booking_Userid);

    useEffect(()=> {
        dispatch(fetchSingleVehicle(id))
        dispatch(fetchFeedback())
        dispatch(fetchUserProfile(localStorage.getItem("token")))
    },[id, DisplayFeed])
    

    const bookVehicle =async (e) => {
        e.preventDefault();

        const rentDays = (new Date(dropofDate) - new Date(bookingDate)) / (24 * 60 *60 *1000)
        const rent_by_date = (SingleVehicleData.Vehicle_rent) * rentDays;

        const data = {
            Vehicle_id: SingleVehicleData._id,
            Vendor_id: SingleVehicleData.user_id, //vedor id means who added that vehicle
            Booking_User_id: Booking_Userid._id,
            Vehicle_type: SingleVehicleData.Vehicle_type,
            Vehicle_name: SingleVehicleData.Vehicle_name,
            Vehicle_model: SingleVehicleData.Vehicle_model,
            Vehicle_rent: rent_by_date,
            Vehicle_average: SingleVehicleData.Vehicle_average,
            Vehicle_image: SingleVehicleData.Vehicle_image,
            Vehicle_Booking_Date: bookingDate,
            Vehicle_Dropof_Date: dropofDate
        }

        if(localStorage.getItem("token")){
        
        if(Booking_Userid?._id === SingleVehicleData.user_id){
            toast.error('Sorry, you cant book your own vehicles!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{

        if(SingleVehicleData?.isBooked){
            toast.error('Sorry, that vehicle is already booked!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
        if(dropofDate > bookingDate){

            let options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                key_secret: import.meta.env.VITE_RAZORPAY_SECRET_KEY,
                amount: parseInt(data.Vehicle_rent) * 100,
                currency: "INR",
                name: "Rent Wheels",
                description: "for testing purpose",
                image:"/images/supcar1.png",
                handler: function (response) {
                  const paymentId = response.razorpay_payment_id;
                //   console.log("paymant id", paymentId);
                //   console.log("res", response);
                  if(paymentId){
                    dispatch(addBooking(data))
                    navigate("/bookings")
                  }
                },
                theme: {
                  color: "#0061ff",
                },
              };

              let pay = new window.Razorpay(options);
              pay.open();

        }else{
            toast.info('Select date properly!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }}
        }
    }else{
        toast.error('Please login!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    }

    const submitFeedback = async () => {

        const data = {
            vendor_id: SingleVehicleData.user_id,
            User_name : Booking_Userid.username,
            User_id: Booking_Userid._id,
            Vehicle_id: SingleVehicleData._id,
            Feedback_message: FeedbackMessage,
            Feedback_date: new Date().toISOString().split('T')[0]
        }

        if(FeedbackMessage){

        if(!localStorage.getItem("token")){
            toast.error('Please Login First', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(Booking_Userid?.role == 'user'){
            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/api/feedback/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Specify JSON format
                    },
                    body: JSON.stringify(data)
                })

                if(response.ok){
                    toast.success('Feedback submitted Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });

                        setDisplayFeed(false)
                        setFeedbackMessage("")
                }else{
                    toast.error('Something went wrong', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }

            } catch (error) {
                console.log(error)
            }
            
        }else{
            toast.error('Only user allowed to give feedback!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }else{
        toast.error('Please Fill Form!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    }
    
    const filteredFeedbacks = Feedbacks && Feedbacks.filter((feedback)=> feedback.Vehicle_id === SingleVehicleData._id)
    
    return(
        <>
            <Navbar />

            <div style={DisplayFeed ? {display: 'block'} : {display: 'none'} } className={Styles.feedback}>
                <h3>FEEDBACK FORM</h3>
                <div>
                    <label htmlFor="">Name:</label> <br />
                    <input value={Booking_Userid?.username} type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Message:</label> <br />
                    <textarea onChange={(e)=> setFeedbackMessage(e.target.value)} placeholder='what do you think about this vehicle!' name="" id=""></textarea>
                </div>
                
                <div className={Styles.feedbtn}>
                    <button onClick={()=> submitFeedback()}>Submit</button>
                    <button onClick={()=> setDisplayFeed(false)} style={{background: 'white', color: "black", border: "1px solid black"}}>Cancle</button>
                </div>
            </div>


            {
                SingleVehicleStatus == 'loading' ? <h1 style={{textAlign: 'center', color: "#0061ff", textTransform: 'uppercase', margin: 50}}>Loading...</h1> 
                :
            <div className={Styles.viewVehicle_con}>
                <h3>Book your vehicle now</h3>
                {/* <h4>Maruti Suzuki - This in model name</h4> */}
                <p>Introducing our premium <span>{SingleVehicleData.Vehicle_name}</span>, a top-notch <span>{SingleVehicleData.Vehicle_model}</span> designed for comfort and efficiency. With an impressive fuel <span>average of {SingleVehicleData.Vehicle_average} km/l</span>, this vehicle ensures a smooth and economical ride. Available for <span>rent at just {SingleVehicleData.Vehicle_rent} per day</span>, you can book it for your desired time period at an affordable price. Whether it's a weekend getaway or a long trip, our reliable vehicle is ready to make your journey hassle-free. Reserve now and enjoy a seamless travel experience! 🚗💨</p> <br />
                <div className={Styles.viewVehicle_con_inn}>
                    <div className={Styles.viewVehicle_info}>
                        <div className={Styles.viewVehicle_img}>
                            <img src={`${import.meta.env.VITE_URL}${SingleVehicleData.Vehicle_image}`} alt="" />
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
                        <form onSubmit={bookVehicle} className={Styles.vehicleForm}>
                            <div className={Styles.formrow}>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Pickup Date</label>
                                    <input onChange={(e)=> setBookingDate(e.target.value)} type="date" name="" id="" required min={new Date().toISOString().split('T')[0]}/>
                                </div>
                                <div className={Styles.formcol}>
                                    <label htmlFor="">Dropof Date</label>
                                    <input onChange={(e)=> setDropofDate(e.target.value)} type="date" name="" id="" required/>
                                </div>
                            </div>

                            <div className={Styles.formrow}>
                                {/* <div className={Styles.formcol}> */}
                                    {/* <button >Pay Now</button> */}
                                    <input style={SingleVehicleData?.isBooked ? {background: "#67b3ff"} : {}} type="submit" value={SingleVehicleData?.isBooked ? "Not Available" : "Rent Now"} />
                                {/* </div> */}
                            </div>
                        </form>

                        <div className={Styles.feedbox}>
                            <h1>Feedbacks</h1>
                            <div className={Styles.feedboxInn}>
                                <div className={Styles.feedboxScroll}>
                                {
                                    filteredFeedbacks.length != 0 ? filteredFeedbacks.map((feedback)=> {
                                        return(
                                            <div key={feedback._id} className={Styles.feedbackContent}>
                                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                    <p><FaUserCircle style={{fontSize: 25, color: '#73BBA3'}} />{feedback.User_name}</p>
                                                    <p style={{fontWeight: 700}}>{feedback.Feedback_date}</p>
                                                </div>
                                                <p>{feedback.Feedback_message}</p>
                                            </div>
                                        )
                                    }) :
                                    <div className={Styles.notfeed}>
                                        <RiFeedbackLine />
                                        <p>Feedbacks Are not Available for this vehicle!</p>
                                    </div>
                                }
                                </div>
                            </div>
                                <button onClick={()=> setDisplayFeed(true)} className={Styles.feedpopbtn}>Give Feedback</button>
                        </div>

                    </div>

                </div>
            </div>
            }
            <Footer />
        </>
    )
}

export default SingleVehicle;