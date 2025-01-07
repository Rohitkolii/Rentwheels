import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from '../Header/Header.module.css'
const Header = () => {
  return (
    <>
      <Navbar />
      <div className={Styles.headercol1}>
        <h1>Rent your vehicle now.</h1>
        <p>Top vehicle rentle deals</p>
      </div>
    </>
  )
}

export default Header