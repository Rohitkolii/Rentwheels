import { Link } from 'react-router';
import Styles from '../Footer/Footer.module.css'

const Footer = () => {
    return(
        <div className={Styles.Footer}>
                <div className={Styles.Footer1}>
                    <div className={Styles.copyright}>
                        <p>All right reserved<Link to='/'> @Rentwheels </Link>2025</p>
                    </div>
                </div>

                <div className={Styles.Footer2}>
                    
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/Vehicles">Vehicles</Link>
                        <Link to="/bookings">Bookings</Link>
                    </ul>
                </div>
        </div>
    )
}

export default Footer;