import React from 'react'
import CardPage from '../card/page'
import styles from './styles.module.css'

const data = [
    {title:"nature",desc:"a description one",color:"#2F3C7E"},
    {title:"adventure",desc:"a description two",color:"#FBEAEB"},
    {title:"modern",desc:"a description three",color:" #F96167"},
    {title:"technology",desc:"a description four",color:"teal"},
    {title:"technology",desc:"a description four",color:"blueviolet"}
]
console.log(data[0].title)
const CardList = () => {
  return (
    <div className={styles.container}>
      {data.map((item)=>(<CardPage card={item} key={item.title}/>))}
    </div>
  )
}

export default CardList
