import React from 'react'
import Styles from '../AdminNavbar/AdminNavbar.module.css'
import { Link } from 'react-router'
import { RiMenu2Fill } from 'react-icons/ri'

const AdminNavabar = () => {
  return (
    <>
        <nav>
            <div className={Styles.logo}>
                <RiMenu2Fill />
                <p>Rentwheels</p>
            </div>
            
            <div className={Styles.navlinks}>
                <ul>
                <li><Link to='/'>Login</Link></li>
                <li><img src="/images/user.jpg" alt="" /></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default AdminNavabar