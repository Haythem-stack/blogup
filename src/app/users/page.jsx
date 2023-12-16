
import React from 'react'


const getData = async() =>{
    const users = await fetch('http://localhost:3000/api/users')
    return users.json()
    }
const Users = async() => {

    const users = await getData()
    console.log(users)
  return (
   <div>
     {users.users.map((user) => (
        <div key={user.username} className="user">{user._id}{user.createdAt}</div>))}
    </div>
  )
}

export default Users
