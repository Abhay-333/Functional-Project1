import React, { useContext } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'
import Loading from './Loading'
import { productContext } from '../Utils/Context'

const Home = () => {
  
  const [products] = useContext(productContext)

  return products ?(
    <div className='h-screen w-full bg-zinc-800 text-white flex overflow-auto'>

        <Navbar />
  <MainContainer />

    </div>
  ) : <Loading/>

}

export default Home