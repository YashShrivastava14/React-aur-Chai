import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import Child from './Child'

export default function Profile(props) {
    const {user} = useContext(UserContext)
    

    if (!user) return <div>Please Login...</div>
    return (
       <>
        <div>Welcome {user.username} of {props.city}</div>
        <Child childprops={props.city} />
       </>

    )

}
