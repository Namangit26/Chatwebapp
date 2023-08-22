import React from 'react'
import Sidebar from '../comp/Sidebar'
import Chat from '../comp/Chat'
const Home = () => {
    return (
        <div className='home'>
          <div className="container maincnt">

            <Sidebar/>
            <Chat/>
          </div>
        </div>
      )
}

export default Home