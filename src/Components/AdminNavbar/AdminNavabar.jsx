import React from 'react'
import Styles from '../AdminNavbar/AdminNavbar.module.css'
import { Link } from 'react-router'
import { RiMenu2Fill } from 'react-icons/ri'

const AdminNavabar = ({setSidebarVisiblity, sidebarVisiblity}) => {
  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <RiMenu2Fill onClick={()=> setSidebarVisiblity(!sidebarVisiblity)}/>
            </div>
            
            <div className={Styles.navlinks}>
                <div className={Styles.profilelink}>
                  <div>
                    <img src="/images/user2.jpg" alt="" />
                  </div>

                  <div>
                    <p>Rohit k.</p>
                    <p>rk112koli@gmail.com</p>
                  </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default AdminNavabar