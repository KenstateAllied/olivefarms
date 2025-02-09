import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150"  className={styles.heading}>New</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Exotic Birds</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>Fully vaccinated</p>
                        <div data-aos='zoom-in' style={{textAlign:'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>LETS&apos;S TALK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;