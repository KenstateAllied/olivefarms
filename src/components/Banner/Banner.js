import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>We hatch and sell day old, one month chicks</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>Contact us and make your order 0713851554 PAYBILL NO 00000</button>
               
            </div>
          
        </div>
        
    </>
  );
};

export default Banner;
