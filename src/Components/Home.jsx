import React from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'


const Home = () => {
  return (
    <div className='h-screen w-full bg-zinc-800 text-white flex overflow-auto'>
        
        <Navbar />
        <MainContainer />

    </div>
  )
}

export default Home