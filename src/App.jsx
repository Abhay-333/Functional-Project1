import React from 'react'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Details from './Components/Details.jsx'

const App = () => {
  return (
    <div className='font-[Gilroy]'>

    

    <Routes>   
       <Route path="/" element={<Home />} />
       <Route path="/details/:id" element={<Details />} />
    </Routes>      

    
    </div>
  )
}

export default App