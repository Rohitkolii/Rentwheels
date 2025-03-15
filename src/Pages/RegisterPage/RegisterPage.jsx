import { useState } from 'react';
import Styles from './RegisterPage.module.css'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


const RegisterPage = () => {

    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const [age, setage] = useState('')
    const [adress, setadress] = useState('')
    const [dlnumber, setdlnumber] = useState('')
    const [role, setrole] = useState('user')
    const [phone, setphone] = useState('')

    const Registerfunction = async (e) => {
        e.preventDefault();
        
        const data = {
            username: username,
            email : email,
            password : password,
            dlnumber : dlnumber,
            age : age,
            phone : phone,
            role : role,
            adress : adress
        }

        console.log(data);

        try {
            const response = await fetch("http://localhost:5000/api/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(data)
            }
            );

            if(response.ok){
                const res_data = await response.json();
                console.log(res_data);
                localStorage.setItem("token", res_data.token)
                setemail("");
                setpassword("");
                toast.success('register Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                navigate("/")
            }else{
                toast.error('Check Credentials', {
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
            console.log(response.statusText);
            
        } catch (error) {
            console.error("register :", error);
        }

        // alert("Hello")
    }

    return(
        <>
        {/* <Navbar/> */}
        <ToastContainer />
        <div className={Styles.Logincontainer}>
            <div className={Styles.innercontainer}>

                <div className={Styles.innercontainer2}>
                    <h1 style={{textAlign: 'center'}}>Registration Form</h1>
                    <form onSubmit={Registerfunction}>
                        <div className={Styles.row}>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Name:</label>
                                <input onChange={(e)=> setusername(e.target.value)} value={username} type="text" placeholder='Name' required/>
                            </div>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Age:</label>
                                <input onChange={(e)=> setage(e.target.value)} value={age} type="number" min={18} placeholder='Enter You Age' required/>
                            </div>
                        </div>
                        <div className={Styles.row}>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Email:</label>
                                <input onChange={(e)=> setemail(e.target.value)} value={email} type="email" placeholder='E-mail for Username' required/>
                            </div>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Password:</label>
                                <input onChange={(e)=> setpassword(e.target.value)} value={password} minLength={4} maxLength={8} type="password" placeholder='Enter You Password' required/>
                            </div>
                        </div>
                        <div className={Styles.row}>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Dl Number:</label>
                                <input onChange={(e)=> setdlnumber(e.target.value)} value={dlnumber} type="text" placeholder='Driving Licence No.' required/>
                            </div>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Address:</label>
                                <input onChange={(e)=> setadress(e.target.value)} value={adress} type="password" placeholder='Enter You Adress : City' required/>
                            </div>
                        </div>
                        <div className={Styles.row}>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Phone Number:</label>
                                <input onChange={(e)=> setphone(e.target.value)} value={phone} type="text" placeholder='enter Phone no.' required/>
                            </div>
                            <div className={`${Styles.column} ${Styles.loginput}`}>
                                <label htmlFor="">Role:</label>
                                <select value={role} onChange={(e)=> setrole(e.target.value)} name="" id="">
                                    <option value="user">User</option>
                                    <option value="vendor">Vendor</option>
                                </select>
                            </div>
                        </div>

                        <div className={Styles.loginbutt}>
                            <button className={Styles.btn}>Register</button>
                        </div>
                    </form>

                    <div className={Styles.loginoutro}>
                        <p>Already have an Account <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RegisterPage;