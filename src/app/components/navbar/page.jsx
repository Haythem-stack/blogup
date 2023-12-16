import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.socials}>
            <Image src="/fb.png" width={20} height={20}/>
            <Image src="/yt.png" width={20} height={20}/>
            <div className={styles.holder}>
            <Image src="/x.png" className={styles.img} fill/>
            </div>          
        </div>
        <div className={styles.logo}>Haythem Dev</div>
        <div className={styles.utils}>
            <ul>
            
            <li><Link href="/" style={{textDecoration:"none", color:"white"}}>  <div className={styles.link}>Home
                <div className={styles.bar}></div></div>
                </Link></li>
                <li>
                  <Link href="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></li>
                <li>  <Link href="/login" style={{textDecoration:"none", color:"white"}}>Login</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
