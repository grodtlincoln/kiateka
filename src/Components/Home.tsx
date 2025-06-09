import React from 'react'

import { FaLocationDot } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className='relative h-[100vh]'>
      <img src= "/homeland.jpg" className='w-full h-full object-cover' 
      alt=''/>

      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/75 to-black/60 flex items-center
                       justify-center'>

          <div className='text-center text-white max-w-5xl px-4'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300
                           via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3'>
              Smart Investment Start With The Right Property
            </h1>

            <p className='text-sm mb-8 text-gray-200'>
              Find a variety of properties that suit you very easily, forget all difficulties in finding
              a residence for you ..
            </p>

          <div className='bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-3'>
              <input type="text" placeholder='Search by Location' className='flex-1 px-6 py-3 rounded-lg border
                           border-gray-300 focus:outline-none focus:ring-2 focus-ring-black hover:border-blue-500
                           hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200'/>

              <select className='px-4 py-3 rounded-lg text-gray-700 border border-gray-300 focus:outline-none 
                                 focus:ring-2 focus-ring-black'>
                <option value="">House</option>
                <option value="">Apartment</option>
                <option value="">Villa</option>
              </select> 

              <button className='bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black
                                 transition-colors'>
                Search
              </button>            
            </div>    
            
            <div className='grid grid-cols-3 gap-3 mt-6'>

              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform 
                              hover:scale-105 cursor-pointer'>
                <FaLocationDot className='text-blue-600 mb-2'/>
                <span className='font-semibold text-white'>Bevely Hills</span>
              </div>

              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform 
                              hover:scale-105 cursor-pointer'>
                <FaLocationDot className='text-blue-600 mb-2'/>
                <span className='font-semibold text-white'>Bevely Hills</span>
              </div>
              
              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform 
                              hover:scale-105 cursor-pointer'>
                <FaLocationDot className='text-blue-600 mb-2'/>
                <span className='font-semibold text-white'>Bevely Hills</span>
              </div>

            </div>

          </div>
          </div>

      </div>
    </div>
  )
}

  export default Home
