import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Olive Farms</p>
                            <p className={styles.text}>We are KUKU about you</p>
                            
                            <div className={styles.social_logo}>
                                <img src={fb} alt="fb" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/>
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Farm & Shop</p>
                            <p className={styles.text}>Kericho </p>
                            <p className={styles.text}>olivefarms@gmail.com</p>
                            <p className={styles.text}>(+254) 713851554</p>
                            <p className={styles.content}>+254 724052417</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hours</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 17:00</p>
                            <p className={styles.text}>Sunday Closed</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
                    <p className={styles.bottom}>Copyright © 2025. Olive Farms. (All rights reserved)</p>
            </div>
        </>
    )
}
export default Footer;