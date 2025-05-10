import React, { useState } from 'react';
import styles from './HomePage.module.css';

import classes from '../assets/images/Home/Classes.svg';
import marks from '../assets/images/Home/Marks.svg';
import notifications from '../assets/images/Home/Notifications.svg';
import store from '../assets/images/Home/Store.svg';
import logo from '../assets/images/Home/whiteLogo.svg'; 
import bell from '../assets/images/Home/bell-notification.svg';
import profile from '../assets/images/Home/profile-circled.svg'; 

const HomePage = () => {

// implementing the functionality of the buttons
const [sinBtn,setSinBtn] = useState(true);
const [engBtn,setEngBtn] = useState(false);

const toggleButton = () => {
    setSinBtn(!sinBtn);
    setEngBtn(!engBtn);
    console.log("clicked");
}

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
                <div className={styles.section25}>
                    <div className={styles.userName}>Hello,</div>
                    <div className={styles.userName}>User Name</div>
                    <div className={styles.welcome}>Welcome to the LMS</div>
                </div>

                <div className={styles.section70}>
                    <div className={styles.section70Top}>
                        Gain knowledge every day...
                    </div>
                    <div className={styles.section70Bottom}>
                        {/* Div 1 */}
                        <div className={styles.div1}>
                            <button className={`${styles.toggleButton} ${sinBtn ? styles.active : ''}`} onClick={toggleButton}>
                                Sin
                            </button>
                            <button className={`${styles.toggleButton} ${engBtn ? styles.active : ''}`} onClick={toggleButton}>
                                Eng
                            </button>
                        </div>

                        {/* Div 2 */}
                        <div className={styles.div2}>
                            Albert Einstein
                        </div>

                        {/* Div 3 */}
                        <div className={styles.div3}></div>
                    </div>
                </div>
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
                    <p className={styles.credentials}>Developed By UCSC</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;