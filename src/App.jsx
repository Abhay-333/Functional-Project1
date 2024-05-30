import React from 'react'
import Home from './Components/Home'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Details from './Components/Details.jsx'
import Create from './Components/Create.jsx'

const App = () => {
  const {search, pathname} = useLocation()
  
  return (
    <div className='font-[Gilroy]'>

    {(pathname != "/" || search.length > 0) && (<Link to="/" className="absolute text-blue-300 font-semibold left-[3%] top-[5%] text-[2vw]">
      Home
    </Link>)}
    

    <Routes>   
       <Route path="/" element={<Home />} />
       <Route path="/create" element={<Create />} />
       <Route path="/details/:id" element={<Details />} />
    </Routes>      

    
    </div>
  )
}

export default App