import React from 'react';
import styles from './HomePage.module.css';
import footer from '../assets/images/Home/footer.png'; 
import classes from '../assets/images/Home/Classes.svg';
import marks from '../assets/images/Home/Marks.svg';
import notifications from '../assets/images/Home/Notifications.svg';
import store from '../assets/images/Home/Store.svg';

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Navbar-like section */}
            <div className={styles.navbar}>Navbar Section</div>

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
                <img src={footer} alt="Footer" className={styles.footerImage} />
            </div>
        </div>
    );
};

export default HomePage;