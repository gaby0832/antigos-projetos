import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from "../Helper/Head"
const UserProfile = () => {
 const {user} = useParams();
    return (
    <div className='container mainSection'>
         <Head title={user} description="Uma rede social para cães e gatos fofos."/>
        <h1 className='title'>{user}</h1>
        <Feed user={user}/>
    </div>
  )
}

export default UserProfile