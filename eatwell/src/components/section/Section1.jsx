import React from 'react'
import styles from './Section1.module.scss'
const Section1 = () => {
  return (
    <div className={style.main}>
            <div className={style.left}>
                <p>EATWELL</p>
            </div>

            <div className={style.pages}>
                <Link to={"/"} className={style.active}>Home</Link>
                <a href="/about">About</a>
                <a href="/offer">offer</a>
                <a href="/menu">menu</a>
                <a href="/news">news</a>
                <a href="/gallery">gallery</a>
                <a href="/contact">contact</a>
            </div>

            <div className={style.burger}>
                <CiMenuBurger/>
                <p>MENU</p>
            </div>
        </div>
  
  )
}

export default Section1
