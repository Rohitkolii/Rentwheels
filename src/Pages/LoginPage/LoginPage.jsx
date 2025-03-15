import { useState } from 'react';
import Styles from './LoginPage.module.css'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const Loginfunction = async (e) => {
        e.preventDefault();
        
        const data = {
            email : email,
            password : password
        }

        console.log(email, password);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login",{
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
                            <input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" placeholder='Enter You Password' required/>
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