
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router';
import Styles from '../Footer/Footer.module.css'

const Footer = () => {
    return(
        <div className={Styles.Footer}>
            <div className={Styles.innerFooter}>
                <div className={Styles.Footer1}>
                    <div className={Styles.Footerform}>
                        <h2>Rentwheels</h2>
                        <p>Make your vehicle renting easy with us.</p>
                        {/* <input type="email" placeholder='Your email here' /> */}
                    </div>
                    <div className={Styles.Footeraddress}>
                        <h2>Address</h2>
                        <p>20, Awesome Road, <br /> New Delhi, 532C</p>
                        <p> &#9990; +91 9999888852</p>
                        <p>contact@shopingo.com</p>
                    </div>
                    <div className={Styles.Footerlink}>
                        <h2>Useful Links</h2>
                        <Link to='/'>Vehicles</Link>
                        <Link to='/'>Bookings</Link>
                        <Link to='/'>profile</Link>
                        <Link to='/'>Login</Link>
                    </div>
                    <div className={Styles.Footercategories}>
                        <h2>Other links</h2>
                            <div className={Styles.footercategoriesinner}>
                                <Link to='/'>About</Link>
                                <Link to='/'>Contact</Link>
                                {/* <Link to='/'>Kids</Link>
                                <Link to='/'>Accesories</Link> */}
                            </div>
                    </div>
                </div>

                <br />

                <div className={Styles.Footer3}>
                    <div className={Styles.copyright}>
                        <p>All right reserved<Link to='/'> @Rentwheels </Link>2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;