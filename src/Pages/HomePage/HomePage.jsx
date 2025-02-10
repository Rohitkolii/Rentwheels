import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Styles from '../HomePage/HomePage.module.css'
import { MdHomeRepairService } from "react-icons/md";
import { FaCar, FaEyeSlash } from 'react-icons/fa';
import { RiPassValidFill } from 'react-icons/ri';

const HomePage = () => {
  return (
    <>
        <Header />
        {/* <br /> */}
        <div className={Styles.featurescon}>
          <div className={Styles.col}>
            <div><MdHomeRepairService /></div>
            <div>
              <p>Service</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
          <div className={Styles.col}>
            <div><FaEyeSlash /></div>
            <div>
              <p>No hidden charges</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
          <div className={Styles.col}>
            <div><FaCar /></div>
            <div>
              <p>Minimum rent</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
          <div className={Styles.col}>
            <div><RiPassValidFill /></div>
            <div>
              <p>Trusted</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
          </div>
        </div>

        <div className={Styles.featurescon2}>
          <h2>What make us different?</h2>

          <div className={Styles.row}>
            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>

            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>

            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>

            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>

            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>

            <div className={Styles.col}>
              <FaCar />
              <p>Title 1</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat inventore minus enim repellendus ad fugiat, corporis ut ratione illo?</p>
            </div>
            
          </div>
        </div>
        <Footer />
    </>
  )
}

export default HomePage