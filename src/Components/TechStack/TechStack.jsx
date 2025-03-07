import React from 'react'
import Styles from '../TechStack/TechStack.module.css'
const TechStack = () => {
    

  return (
    <>
        <section className={Styles.Partners}>
            {/* <p className='subp' style={{textAlign: 'center',  fontSize: '18px'}}>Technologies we use</p> */}
            <div className={Styles.row}>

                <div className={Styles.innerrow}>
                    <div className={Styles.col}>
                        <img src="images/supbike1.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike2.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike3.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike4.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar1.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar2.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar3.png"/>
                    </div>

                </div>


                <div className={Styles.innerrow}>
                <div className={Styles.col}>
                        <img src="images/supbike1.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike2.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike3.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supbike4.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar1.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar2.png"/>
                    </div>
                    <div className={Styles.col}>
                        <img src="images/supcar3.png"/>
                    </div>

                </div>
                
            </div>
            
        </section>
    </>
  )
}

export default TechStack