import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why you should choose us for your farming needs.</p>
                <p data-aos='slide-left' className={styles.sub_text}>We supply feeds for chickens, sheep and Cows</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Farming Experts</p>
                        <p className={styles.logo_text}>Quality Breeds</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Give us a call with your order</p>
                        <p className={styles.logo_text}>After payment will ship to your door step</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Long Term Customer Care</p>
                        <p className={styles.logo_text}>Good quality chicken breeds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;