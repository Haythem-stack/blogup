import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image className={styles.image} src="https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg" fill/>
        <p className={styles.copy}>&copy; All Copyrights reserved 2024.</p>
      </div>
     
    </div>
  )
}

export default Footer
