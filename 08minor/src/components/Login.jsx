import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'



export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    // data bhejne ke liye 
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
            <h2> Login</h2>
            <input type='text' placeholder='Enter username' 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            />
            <input type='text' placeholder='Enter password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )
}
