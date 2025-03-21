import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About Us</p>
            <p data-aos='slide-left' className={styles.subHeading}>Agriculture Systems</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>Give us your order & we will deliver</p>
        
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>About Us</p>
                    <p className={styles.creativity}>We will deliver to your satisfaction</p>
                    <p className={styles.contn}>
                        Perfection is our notch</p>
                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
            </div>
            <div data-aos='fade-up' className='row' style={{textAlign:'left'}}>
                <div className={`col-md-6`}> 
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
            </div>
        </div>
    )
}

export default Top;