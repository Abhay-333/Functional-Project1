import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'
import Loading from './Loading'
import { productContext } from '../Utils/Context'
import axios from '../Utils/Axios'
import { useLocation } from 'react-router-dom'


const Home = () => {
  
  const [products] = useContext(productContext)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const {search} = useLocation()
  const decodedCategory = decodeURIComponent(search.split("=")[1])
  
  const getProductCategory = async ()=>{
    try {
        const {data} = await axios.get(`/products/category/${decodedCategory}`)
        setFilteredProducts(data)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    if(!filteredProducts || decodedCategory == 'undefined') setFilteredProducts(products)
    if(decodedCategory != "undefined") getProductCategory()

  },[decodedCategory, products])


  return products ?(
    <div className='h-screen w-full bg-zinc-800 text-white flex overflow-auto'>

        <Navbar />

        <MainContainer filterP={filteredProducts} />


    </div>
  ) : <Loading/>

}

export default Home