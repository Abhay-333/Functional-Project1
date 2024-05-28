import React from 'react'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className='h-screen w-[82%] p-[2vw] flex flex-wrap gap-10 overflow-x-hidden overflow-y-auto'>

      <Link to="/details/1" className="card hover:scale-[1.03] transition-all cursor-pointer  p-5 w-[20vw] h-[50vh] shadow-lg text-black rounded-lg bg-zinc-100 flex items-center justify-center flex-col">

        <div className="img-div  w-[80%] h-[90%] mb-[10%] overflow-hidden bg-center bg-cover rounded-lg" style={{backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",}} >

        </div>

        <h1>Lorem ipsum dolor sit amet.</h1>
      </Link>
      
    
    </div>
  )
}

export default MainContainer