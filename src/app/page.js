
import Image from 'next/image'
import styles from './page.module.css'
import CardList from './components/cardList/page'
import CarouselPage from './components/carousel/page'



export default function Home () {




  return (
   <div className={styles.container}>
    <h1 className={styles.title}>Discover with Me Haythem</h1>
    <h2 className={styles.little}>a lot of undiscovered places and live the adventure...</h2>
    <div className={styles.wrapper}>
    <div className={styles.left}>
      <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg" fill className={styles.img}/>
      </div> 
      </div>
      <div className={styles.right}>
        <div className={styles.texts}>
          <div className={styles.textTitle}>Santorini a piece from heaven</div>
          <div className={styles.textSub}>the best places one eath</div>
          <p className={styles.textDesc}>e lorem ipsum dolor sit. Est ultricies integer quis auctor elit sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque. Urna condimentum tas egestas fringilla phasellus faucibus scelerisque.orem ipsum dolor sit. Est ultricies integer quis auctor elit sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque.orem ipsum dolor sit. Est ultricies integer quis auctor elit sed vulputate. Sed egestas egestas frinmattis pellentesque id nibh tortor. Maecenas accumsan lacus vel facilisis volutpat. Sapien faucibus et molestie ac feugiat. Iaculis nunc sed augue lacus. Nulla porttitor orem ipsum dolor sit. Est ultricies integer quis auctor elit sed vulputate. Sed egesgilla phasellus faucibus scelerisque.m</p>
        </div>
        <button className={styles.btn}>See More!</button>
      </div>

    </div>
    
    <CardList />
    <CarouselPage />
  </div>
  )
}
