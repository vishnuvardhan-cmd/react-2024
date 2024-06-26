import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const {username}=useParams()
  return (
    <div className='text-center bg-orange-800 py-5 text-black text-3xl'>
      User : {username}
    </div>
  )
}

export default User
