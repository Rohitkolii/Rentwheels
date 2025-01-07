import { useState } from 'react';
import Styles from './LoginPage.module.css'
import { Link } from 'react-router';

const LoginPage = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const Loginfunction = () => {

    }

    return(
        <>
        {/* <Navbar/> */}
        <div className={Styles.Logincontainer}>
            <div className={Styles.innercontainer}>
                <div className={Styles.innercontainer1}>
                    
                </div>

                <div className={Styles.innercontainer2}>
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <div>
                        <div className={`${Styles.column} ${Styles.loginput}`}>
                            <label htmlFor="">username</label>
                            <input onChange={(e)=> setemail(e.target.value)} type="text" placeholder='E-mail or Username' required/>
                            <label htmlFor="">password</label>
                            <input onChange={(e)=> setpassword(e.target.value)} type="password" placeholder='Enter You Password' required/>
                        </div>

                        <div className={Styles.forgetlink}>
                            <Link to='/'>Forgot Password!</Link>
                        </div>

                        <div className={Styles.loginbutt}>
                            <button onClick={()=> Loginfunction()} className={Styles.btn}>Login</button>
                        </div>
                    </div>

                    <div className={Styles.loginoutro}>
                        <p>Not a Member <span>SignUp</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;