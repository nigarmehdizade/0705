import React from 'react'
import styles from './Section1.module.scss'
const Section1 = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.log}>
        <h1>EATWELL</h1>
    </div>
    <div className={styles.list}>
        <ul>
            <li className={styles.n1}>HOME</li>
            <li>ABOUT</li>
            <li>OFFER</li>
            <li>MENU</li>
            <li>NEWS</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
        </ul>

    </div>
      
    </div>
  )
}

export default Section1
