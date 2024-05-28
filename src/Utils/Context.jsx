import React, { createContext, useEffect, useState } from 'react'
import axios from '../Utils/Axios'

export const productContext = createContext()

const Context = (props) => {
  const [products, setProducts] = useState(null)
  
  const getProduct = async () =>{
    try {
        const {data} = await axios("/products")
        setProducts(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <productContext.Provider value={[products, setProducts]}>{props.children}</productContext.Provider>
  )
}

export default Context