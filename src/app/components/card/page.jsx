import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const CardPage= ({card}) => {
  return (
    <div className={styles.container} style={{backgroundColor:card.color}}>
        <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature" className={styles.img} fill></Image>
        </div>
        <div className={styles.texts}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.desc}</p>
        </div>
  
    </div>
  )
}

export default CardPage
