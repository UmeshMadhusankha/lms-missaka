import React from 'react';
import styles from './HomePage.module.css';

import classes from '../assets/images/Home/Classes.svg';
import marks from '../assets/images/Home/Marks.svg';
import notifications from '../assets/images/Home/Notifications.svg';
import store from '../assets/images/Home/Store.svg';
import logo from '../assets/images/Home/whiteLogo.svg'; 
import bell from '../assets/images/Home/bell-notification.svg';
import profile from '../assets/images/Home/profile-circled.svg'; 

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Navbar-like section */}
            <div className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <img src={logo} className={styles.navbarLeftTop} />
                </div>
                <div className={styles.navbarRight}>
                <button className={styles.navbarButton}>
                    <img src={bell} alt="Classes" className={styles.navbarButtonImage} />
                </button>
                <button className={styles.navbarButton}>
                    <img src={profile} alt="Marks" className={styles.navbarButtonImage} />
                </button>
                <button type='submit' className={styles.btn} >
                    Log Out
                </button>
            </div>
        </div>

            {/* Two sections below navbar */}
            <div className={styles.twoSections}>
                <div className={styles.section25}>25% Width, 20% Height</div>
                <div className={styles.section70}>70% Width, 40% Height</div>
            </div>

            {/* Section below the two sections */}
            <div className={styles.wideSection}>95% Width Section</div>

            {/* Section with 4 small divs */}
            <div className={styles.fourDivsContainer}>
                <div className={styles.smallDiv}>
                    <img src={classes} alt="Classes" className={styles.icon} />
                </div>
                <div className={styles.smallDiv}>
                    <img src={marks} alt="Marks" className={styles.icon} />
                </div>
                <div className={styles.smallDiv}>
                    <img src={notifications} alt="Notifications" className={styles.icon} />
                </div>
                <div className={styles.smallDiv}>
                    <img src={store} alt="Store" className={styles.icon} />
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <img src={logo} className={styles.footerLeftTop} />
                    <div className={styles.footerLeftBottom}></div>
                </div>
                <div className={styles.footerRight}>
                    <p>Developed By UCSC</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;