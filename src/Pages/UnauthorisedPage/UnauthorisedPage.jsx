import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Unauthorised from '../../Components/Unauthorised/Unauthorised'
import Footer from '../../Components/Footer/Footer'

const UnauthorisedPage = () => {
  return (
    <>
        <Navbar />
            <Unauthorised />
        <Footer />
    </>
  )
}

export default UnauthorisedPage
