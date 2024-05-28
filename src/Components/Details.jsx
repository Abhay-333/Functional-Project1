import React from 'react'
import { Link } from 'react-router-dom'


const Details = () => {
  return (
    <div className='w-[80%] mx-auto h-screen pt-[7%] pl-[7%] bg-red-300'>
        
        <div className="content flex gap-10">
            <div className="details-img w-[20vw] overflow-hidden shrink-0">
                <img className='w-full h-full object-cover' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>

            <div className="desc ">
            
            <h1 className='text-[3vw] font-semibold leading-[4vw]'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h1 className='mt-[1%] text-[2vw] font-regular'>$109.95</h1>
            <p className='mt-[2%] text-[1.4vw]'>Category: Men's clothing</p>
            <p className='text-[1.2vw]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>

            <Link className='edit bg-blue-400 px-4 py-3 text-white rounded-lg font-regular'>
              <button>Edit</button>
            </Link>

            <Link className='delete bg-red-400 px-4 py-3 text-white rounded-lg font-regular'>
            <button>Delete</button>
            </Link>
            
            </div>

        </div>

    </div>
  )
}

export default Details