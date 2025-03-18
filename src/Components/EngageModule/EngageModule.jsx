import React from 'react'
import Styles from '../EngageModule/EngageModule.module.css'
import { Link, NavLink } from 'react-router'

const Random = () => {
  return (
    <div className={Styles.Random}>
        <p style={{fontSize: 30, fontWeight: 900, textTransform: 'uppercase'}}>Get in <span style={{color: '#0061ff'}}>Touch</span><span style={{color:'#0061ff'}}>.</span></p>
        {/* <h3>Get in touch</h3> */}
        <p className='subp'>Rent the best vehicles effortlessly! Choose from a wide range of top-quality cars and bikes at unbeatable prices. Simple booking, hassle-free experience—get your ride today! 🚗✨</p>

        <div style={{display:'flex', gap: 20, justifyContent: 'center', margin: '30px 0',}}>
            <Link to='/vehicles'>Get your vehicle Now</Link>
        </div>
    </div>
  )
}

export default Random