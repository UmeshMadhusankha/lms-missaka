import React from 'react';
import styles from './ClassesPage.module.css';
import GreenClass from '../components/GreenClass/GreenClass'
import RedClass from '../components/RedClass/RedClass';
import profilePic from '../assets/images/Home/profile-circled.svg'
import logo from '../assets/images/Home/whiteLogo.svg';

const ClassesPage = () => {
    return (
        <div className={styles.container}>
            {/* 95% width, 10% height */}
            <div className={styles.headerBox}>
                <div className={styles.headerLeft}>
                    <button className={styles.backButton}>&larr;</button>
                    <div className={styles.logoSection}>
                        <img src={logo} alt="Logo" className={styles.logoImg} />
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.profileLogo}>
                        <img src={profilePic} alt="Profile" className={styles.profileImg} />
                    </div>
                    <div className={styles.profileName}>John Doe</div>
                </div>
            </div>

            {/* 5% height, 10% width */}
            <div className={styles.sideBox}>Side Box</div>

            {/* 6 divs in 2 rows, 3 per row, 55% height */}
            <div className={styles.cardsContainer}>
                <div className={styles.card}><GreenClass/></div>
                <div className={styles.card}><RedClass/></div>
                <div className={styles.card}><RedClass/></div>
                <div className={styles.card}><GreenClass/></div>
                <div className={styles.card}><GreenClass/></div>
                <div className={styles.card}><GreenClass/></div>
            </div>

            {/* 35% height footer */}
            <div className={styles.footer}>Footer Section</div>
        </div>
    );
};

export default ClassesPage;