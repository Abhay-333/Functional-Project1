import React, { useContext } from 'react'
import { productContext } from '../Utils/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [products] = useContext(productContext)

  let uniqueCategory = products && products.reduce((accumulator, currentValue) => [...accumulator, currentValue.category], [])

  uniqueCategory = [...new Set(uniqueCategory)]

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.5)`
}

console.log(color())

  return (
    <nav className='h-full shrink-0 w-[18%]'>
      <div className="p-5 side-nav h-full w-[100%] bg-zinc-700 flex items-center justify-start flex-col pt-[20%]">
        <button className='bg-blue-400 px-4 py-3 text-white rounded-lg font-regular'>Add New Product</button>

        <hr className='my-[8%] w-[80%]' />

        <div className="Category">
          <h1 className='text-[1.8vw] mb-[4%]'>Category Filter</h1>

          <ul className=''>

            {uniqueCategory.map((category, index) => {
              return <Link key={index} to={`/?category=${category}`} className='hover:text-blue-300 capitalize flex items-center justify-start w-full gap-2 text-[1.4vw]'>
                <span style={{backgroundColor: `${color()}`}} className='rounded-full h-[2.5vh] w-[1.3vw] inline-block'></span>
                {category}
              </Link>
            })}

          </ul>


        </div>

      </div>
    </nav>
  )
}

export default Navbar