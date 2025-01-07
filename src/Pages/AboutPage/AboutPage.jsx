import React from 'react'
import Header from '../../Components/Header/Header'
const AboutPage = () => {
  return (
    <>
        <Header />

        <div style={{width: "90%", margin: '50px auto', lineHeight: "25px"}}>
            <h1>About Rentwheels</h1> <br />
            <p>Welcome to <span style={{fontWeight: 600}}>RentWheels</span>, your ultimate destination for easy, fast, and reliable vehicle rentals. Whether you're looking for a car for a weekend getaway, a van for a road trip, or even a luxury ride for a special occasion, RentWheels connects customers with a wide variety of vehicles to suit any need.</p>
            <p>For Customers: RentWheels makes renting a vehicle effortless. With our easy-to-use platform, you can browse a broad selection of cars, trucks, SUVs, and more. Filter by price, vehicle type, location, and availability, and find the perfect ride that fits your journey. Whether you're traveling for business or leisure, RentWheels provides you with the flexibility to rent a vehicle for as short or long a time as you need. No more waiting in long lines at traditional rental agencies — simply book online and hit the road!</p>
            <p>For Vehicle Owners & Vendors: Do you have a vehicle you’d like to rent out? RentWheels offers an opportunity for vehicle owners and vendors to list their cars, vans, trucks, and more. With our easy-to-use platform, you can create a listing in minutes, set your own rental terms, and start earning income. We provide full support throughout the process, from listing creation to payment processing. Our secure and transparent system ensures both owners and renters have a seamless experience.</p>
            <br />
            <h2>Why Choose RentWheels?</h2> <br />
            <ul>
                <li><span style={{fontWeight: 600}}>Wide Selection:</span> Choose from a vast variety of vehicles — from economy to luxury, compact to spacious, we have something for everyone.</li>
                <li><span style={{fontWeight: 600}}>Easy Booking:</span> User-friendly platform for browsing, booking, and managing your rentals.</li>
                <li><span style={{fontWeight: 600}}>Trust & Security:</span> Rent with confidence knowing our platform offers secure payment processing, transparent reviews, and customer support.</li>
                <li><span style={{fontWeight: 600}}>Flexibility:</span> Rent a vehicle for a day, a week, or longer — you choose the duration that fits your needs.</li>
                <li><span style={{fontWeight: 600}}>Support for Vendors:</span> RentWheels provides an easy-to-use interface for vendors to list and manage their vehicles, with marketing tools, payment tracking, and customer feedback management.</li>
            </ul> <br />
            <p>Our Mission At <span style={{fontWeight: 600}}>RentWheels</span>, we are committed to making vehicle rental as convenient, affordable, and accessible as possible. We believe in empowering both customers and vendors by offering an innovative platform that streamlines the entire rental process. Whether you're renting for a short trip or looking to share your vehicle with others, RentWheels is your trusted partner for all your rental needs.</p>
            <br />
            <p>Start your journey today — find the perfect ride or list your vehicle with RentWheels!</p>

        </div>
    </>
  )
}

export default AboutPage