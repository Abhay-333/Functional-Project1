import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../Utils/Axios'
import Loading from './Loading'

const Details = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState([])

  const getSingleProduct = async () => {

    try {
      const { data } = await axios.get(`/products/${id}`)
      setSingleProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  return setSingleProduct ? (
    <div className='w-[80%] mx-auto h-screen flex justify-center items-start pt-[7%] pl-[7%] '>

      <div className="content flex gap-10 ">
        
        <div className="mr-[5%] self-center max-w-[28vw]">
          <div className="details-img w-[100%] overflow-hidden">
            <img className='w-full h-full object-top object-cover' src={`${singleProduct.image}`} alt="" />
          </div>
        </div>

        <div className="details">

          <h1 className='text-[3vw] font-semibold leading-[4vw]'>{singleProduct.title}</h1>
          <h1 className='mt-[1%] text-[2vw] font-regular'>${singleProduct.price}</h1>
          <p className='mt-[2%] text-[1.4vw] capitalize'>Category: {singleProduct.category}</p>
          
          <div className="desc max-w-[120vw]">
          <p className='text-[1.2vw]'>{singleProduct.description}</p>

          </div>

          <Link className='edit '>
            <button className='bg-blue-400 px-6 py-3 text-white rounded-lg font-regular mt-[5%]'>Edit</button>
          </Link>

          <Link className='delete '>
            <button className='bg-red-400 px-6 py-3 text-white rounded-lg font-regular m-[2%]'>Delete</button>
          </Link>

        </div>

      </div>

    </div>

  ) : (<Loading />)

}

export default Details