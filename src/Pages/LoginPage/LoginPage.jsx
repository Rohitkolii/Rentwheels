import { useState } from 'react';
import Styles from './LoginPage.module.css'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";



const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [visiblity, setvisiblity] = useState(false)

    const Loginfunction = async (e) => {
        e.preventDefault();
        
        const data = {
            email : email,
            password : password
        }

        console.log(email, password);

        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/auth/login`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(data)
            }
            );

            if(response.ok){
                const res_data = await response.json();
                // console.log(res_data);
                localStorage.setItem("token", res_data.token)
                // console.log("role", res_data.role)
                if(res_data?.role === 'admin') navigate("/admin")
                if(res_data?.role === 'vendor') navigate("/vendor")
                if(res_data?.role === 'user') navigate("/")
                setemail("");
                setpassword("");
                toast.success('Login Successfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                // navigate("/")
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

        // alert("Hello")
    }

    return(
        <>
        {/* <Navbar/> */}
        {/* <ToastContainer /> */}
        <div className={Styles.Logincontainer}>
            <div className={Styles.innercontainer}>
                <div className={Styles.innercontainer1}>
                    
                </div>

                <div className={Styles.innercontainer2}>
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <div>
                        <div className={`${Styles.column} ${Styles.loginput}`}>
                            <label htmlFor="">username</label>
                            <input onChange={(e)=> setemail(e.target.value)} value={email} type="text" placeholder='E-mail or Username' required/>
                            <label htmlFor="">password</label>
                            <div style={{display:'flex'}}>
                                <input onChange={(e)=> setpassword(e.target.value)} value={password} type={visiblity ? "text" : "password"} placeholder='Enter You Password' required/>
                                <button onClick={()=> setvisiblity(!visiblity)} style={{padding: "0 10px", background:"transparent", color:"black",border:"transparent", cursor:"pointer"}}><FaEye /></button>
                            </div>
                            
                        </div>

                        <div className={Styles.loginbutt}>
                            <button onClick={Loginfunction} className={Styles.btn}>Login</button>
                        </div>
                    </div>

                    <div className={Styles.loginoutro}>
                        <p>Not a Member <Link to="/register">SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;