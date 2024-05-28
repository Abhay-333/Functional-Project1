import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../Utils/Context'

const MainContainer = () => {

  const [products] = useContext(productContext)

  return (
    <div className='h-screen w-[82%] p-[2vw] flex flex-wrap gap-10 overflow-x-hidden overflow-y-auto'>

      {products.map((Item, index) => {
        return <Link key={index} to={`/details/${Item.id}`} className="card hover:scale-[1.03] transition-all cursor-pointer  p-5 w-[20vw] h-[50vh] shadow-lg text-black rounded-lg bg-zinc-100 flex items-center justify-center flex-col">

        <div className="img-div  w-[90%] mb-[10%] overflow-hidden rounded-lg">
          <img className='w-full h-full object-top object-cover' src={`${Item.image}`} alt="" />
        </div>

        <h1>{Item.title}</h1>
      </Link>


      })}

      
    </div>
  )
}

export default MainContainer