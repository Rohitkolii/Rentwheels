import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Styles from '../ProfilePage/ProfilePage.module.css'

const ProfilePage = () => {
  return (
    <>
      <Navbar />

      <div className={Styles.profilecon}>
        <p></p>
        <div className={Styles.profilecol}>
          <p>Name : <span>Rohit</span></p>
          <p>Age : <span>26</span></p>
          <p>Address : <span>H-44 Greater Kailash 110055</span></p>
          <p>Email : <span>Rohitkolisd@gmail.com</span></p>
          <p>Phone No. : <span>9999888877</span></p>

          <div className={Styles.profilebuttons}>
            <button>Edit</button>
          </div>
        </div>

        <div className={Styles.profilecol}>
          <p>Driving Licwnce No. : <span>DL88888****oo88</span></p>
        </div>
      </div>
    </>
  )
}

export default ProfilePage