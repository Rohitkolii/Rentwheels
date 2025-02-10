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

      <div className={Styles.headerabt}>
        <p>Find your vehicle</p>
        <p>Welcome to RentWheels, your ultimate destination for easy, fast, and reliable vehicle rentals. Whether you're looking for a car for a weekend getaway, a van for a road trip, or even a luxury ride for a special occasion, RentWheels connects customers with a wide variety of vehicles to suit any need.</p>
      </div>
    </>
  )
}

export default Header