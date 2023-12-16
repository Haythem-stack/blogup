"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation';
import { useContext } from 'react'
import { ThemeContext } from '../context/context';




const LoginPage = () => {
    const toggle = useContext(ThemeContext)
  
    const[name, setName] = useState("");
    const[password, setEmail] = useState("");
    const { push } = useRouter();

    const handleSubmit = async() => {
        const data = await fetch("/api/login",{
            method: "POST",
            body:JSON.stringify({
                name: name,
                password: password
            })
        }) .then((response) => {
            toggle()
          if (response.status === 200) {
            push('/')
           
          } else {
            console.log("login failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
    }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <label>Name</label>
        <input type="text" className={styles.input} placeholder="name" onChange={(e) => setName(e.target.value)}></input>
        <label>Name</label>
        <input type="password" className={styles.input} placeholder="password"  onChange={(e) => setEmail(e.target.value)}></input>
        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default LoginPage
