import React from 'react'
import styles from './LoginPage.module.css'
import GlowingBGCricle from '../components/glowingBGCricle/glowingBGCricle'
import logo from '../assets/images/nameLogo.png'

function LoginPage() {
  return (
    <div className={styles.container}>
        <div className={styles.ellipsContainer} >
            <GlowingBGCricle 
              size="45vw" 
              maxSize="315px"
              maxLeft="-1"
              maxTop="-20vh"
              col1="rgba(2, 148, 216, 0.75)"
              col2="rgba(7, 123, 255, 0.5)" 
              col3="rgba(7, 176, 255, 0.9)"
              col4="rgba(7, 176, 255, 0.75)"
              top="-20vh"
              left="27.5vw" />
            <GlowingBGCricle
              size="39vw"
              maxSize="273px"
              maxLeft="-2"
              maxTop= "17vh"
              col1="rgba(255,200,11,0.3)"
              col2="rgba(255, 232, 99, 0.4)"
              col3="rgba(99,255,232,0.75)"
              col4="rgba(99,255,232,0.65)"
              left="85vw" 
              top="17vh"/>
            <GlowingBGCricle
              size="40vw"
              maxSize="280px"
              maxLeft="-3"
              maxBottom="-25vh"
              col1="rgba(243, 7, 255, 0.5)"
              col2="rgba(147, 2, 155,0.75)"
              col3="rgba(122, 27, 114, 0.5)"
              col4="rgba(96, 14, 121, 0.5)"
              left="80vw"
              bottom="-30vh"/>
            <GlowingBGCricle className={styles.glowingCircle}
              size="45vw"
              maxSize="315px"
              maxLeft="-4"
              maxBottom="5vh"
              col1="rgba(29, 151, 110, 1)"
              col2="rgba(29, 151, 110, 0.75)"
              col3="rgba(29, 151, 110, 0.5)"
              col4="rgba(29, 151, 110, 0.25)"
              left="-15vw" 
              bottom="5vh"/>
        </div>
        <div className={styles.image}>
          <img src={logo} className={styles.logo}/>
        </div>
        <div className={styles.main} >
          <p className={styles.login}>LOGIN</p>
          <hr className={styles.divider}/>
          <div className={styles.fields}>
            <label htmlFor="username" className={styles.labels}>Student ID:</label>
            <input type='text' name='username' className={styles.inputFields}/>
            <label htmlFor="password" className={styles.labels}>Password:</label>
            <input type='password' name='password' className={styles.inputFields}/>
          </div>
          <div className={styles.register}>
            <p>Have you not registered yet? </p>
            <a href='#' className={styles.hyperLink}>Register</a>
          </div>
          <button type='submit' className={styles.btn} >LOGIN</button>
        </div>
    </div>
  )
}

export default LoginPage