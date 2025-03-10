import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

const ContactUsForm = () =>{
    const [formContent, setFormContent ] = useState({});

    const handleChange = ( event ) =>{
        const { value, name } = event.target;

        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>Find our contacts below</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>Kericho & Eldoret </p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={styles.head}>Contacts</p>
                        <p className={styles.content}>Phone 	: +254 713851554</p>
                        <p className={styles.content}>Phone 	: +254 724052417</p>
                        <p className={styles.content}>Email: olivefarms@gmail.com</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={styles.head}>Hours</p>
                        <p className={styles.content}>Monday - Saturday: 08:00 - 17:00</p>
                        <p className={styles.content}>Sunday Closed</p>
                    </div>
                </div>

                <p className={styles.email} data-aos='fade-up'>You can email us</p>

                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Name</label><br/>
                        <input name="name" value={formContent.name} onChange={handleChange} className={styles.input} type="text" />

                        <label className={styles.label}>Your Email</label><br/>
                        <input name="email" value={formContent.email} onChange={handleChange} className={styles.input} type="email" />

                        <label className={styles.label}>Subject</label><br/>
                        <input name="subject" value={formContent.subject} onChange={handleChange} className={styles.input} type="text" />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Message</label><br/>
                        <textarea name="message" value={formContent.message} onChange={handleChange} className={`${styles.input} ${styles.msg}`} type="text"/>
                        <div style={{textAlign:'right'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <Map
                    google={this.props.google}
                    style={{width:'100%', height:'50%'}}
                    zoom={14}
                    initialCenter={
                        {
                            lat: 23.760374,
                            lng: 90.411643
                        }
                    }
                />
            </div> */}
        </>
    )
}

export default ContactUsForm;