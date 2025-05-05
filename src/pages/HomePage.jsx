import React from 'react';
import styles from './HomePage.module.css';
import footer from '../assets/images/Home/footer.png'; 

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
                <div className={styles.smallDiv}>Div 1</div>
                <div className={styles.smallDiv}>Div 2</div>
                <div className={styles.smallDiv}>Div 3</div>
                <div className={styles.smallDiv}>Div 4</div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <img src={footer} alt="Footer" className={styles.footerImage} />
            </div>
        </div>
    );
};

export default HomePage;