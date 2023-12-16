"use client"
import React, { useState } from 'react'

import { FaHome } from "react-icons/fa";
import styles from './page.module.css'




const ContactPage = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("")
  const [password,setPass] = useState("")
  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
     
      method: "POST",

      body: JSON.stringify({
        username,
        email,
        password
      }),
   
    });
  }

 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
<FaHome style={{width:"45px", height:"45px"}}/>
<label htmlFor="name">Enter Name </label>
<input className={styles.input} type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)}/>


<label htmlFor="age"> Enter Email </label>
<input  className={styles.input} type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>


<label htmlFor="password"> Enter Password </label>
<input  className={styles.input} type="text" name="password" id="pass" onChange={(e)=>setPass(e.target.value)}/>

<button className={styles.btn} onClick={handleSubmit}>submit</button>
      </div>
      </div> 
    
  )
}

export default ContactPage
