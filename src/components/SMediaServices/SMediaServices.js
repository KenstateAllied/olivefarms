import React from "react";
import styles from './SMediaServices.module.css';
import img1 from '../../assets/sMediaService/main.png';
import img2 from '../../assets/sMediaService/middle1.png';
import img3 from '../../assets/sMediaService/bottom1.png';

const SMediaServices = () =>{
    return (
        <>
            <div>
                {/* Top  */}
                <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Market <span style={{color:'#ff4c0a'}}>Visibility</span></p>
                            <p className={styles.headTop}>Competitive Edge</p>
                            <p className={styles.identityTop}>Multi channels</p>
                            <p className={styles.content}>What will make you stand out from your competition?</p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img src={img1} alt="" className={styles.img1}/>
                    </div>
                </div>

                {/* Middle  */}
                <div className="container">
                    <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                        <div className={`col-md-6 ${styles.middleContain}`}>
                            <p className={styles.heading}>CI/ CD - Continuos Improvement/ Continuos Deployment</p>
                            <p className={styles.text}>Stay ahead of the pack</p>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} alt="" className={styles.img2}/>
                        </div>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="container">
                    <div className={`row ${styles.contain}`}>
                        <div className="col-md-6">
                            <img src={img3} alt="" className={styles.img2}/>
                        </div>
                        <div className={`col-md-6 ${styles.bottomContain}`}>
                            <p className={styles.heading1}>Customization</p>
                            <p className={styles.text1}>Never have "one size fits all" mentality.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
export default SMediaServices;