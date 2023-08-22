import React from 'react'
import Nav from './Nav'
import Ser from './Ser'
import Chats from './Chats'
const Sidebar = () => {
  return (
    <div className='sidebar ss'>
        <Nav/>
        <Ser/>
        <Chats/>
    </div>
  )
}

export default Sidebar