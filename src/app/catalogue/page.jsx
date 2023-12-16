"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../context/context'



const CataloguePage = () => {
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(!modal);
  }
  const user = useContext(ThemeContext)
  console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
            <div className={styles.content}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.description}>
                <h2>Title</h2>
                <h3>subtitle</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, officia animi qui enim voluptates dolorem perferendis quis suscipit molestiae!</p>
            </div>
            </div>
            
        </div>
        <div className={styles.item}>
        <div className={styles.content}>
        <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.description}>
                <h2>Title</h2>
                <h3>subtitle</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, officia animi qui enim voluptates dolorem perferendis quis suscipit molestiae!</p>
            </div>
            </div>
        </div>
        <div className={styles.item}>
        <div className={styles.content}>
        <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.description}>
                <h2 className={styles.title}>Title</h2>
                <h3 className={styles.subtitle}>subtitle</h3>
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, officia animi qui enim voluptates dolorem perferendis quis suscipit molestiae!</p>
            </div>
            </div>
        </div>
        <div className={styles.item}>
        <div className={styles.content}>
        <div className={styles.imgContainer} onClick={openModal}>
                <Image src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
            </div>
            {modal && <div className={styles.mo} onClick={openModal}>Modal</div>}
            <div className={styles.description}>
                <h2 className={styles.title}>Title</h2>
                <h3 className={styles.subtitle}>subtitle</h3>
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, officia animi qui enim voluptates dolorem perferendis quis suscipit molestiae!</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CataloguePage
