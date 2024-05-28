import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-full shrink-0 w-[18%]'>
        <div className="p-5 side-nav h-full w-[100%] bg-zinc-700 flex items-center justify-start flex-col pt-[20%]">
          <button className='bg-blue-400 px-4 py-3 text-white rounded-lg font-regular'>Add New Product</button>

          <hr  className='my-[8%] w-[80%]'/>

          <div className="Category">
            <h1 className='text-[1.8vw] mb-[4%]'>Category Filter</h1>
            
            <ul className=''>

              <li className='flex items-center justify-start w-full gap-2 text-[1.4vw]'>
                <span className='rounded-full h-[2.5vh] w-[1.3vw] bg-blue-300 inline-block'></span>
                    cat 1
              </li>

              <li className='flex items-center justify-start w-full gap-2 text-[1.4vw]'>
                <span className='rounded-full h-[2.5vh] w-[1.3vw] bg-blue-300 inline-block'></span>
                    cat 2
              </li>

              <li className='flex items-center justify-start w-full gap-2 text-[1.4vw]'>
                <span className='rounded-full h-[2.5vh] w-[1.3vw] bg-blue-300 inline-block'></span>
                    cat 3
              </li>

            </ul>


          </div>

        </div>
      </nav>
  )
}

export default Navbar