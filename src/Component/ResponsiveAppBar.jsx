import React from 'react'
import {  Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <main className='bg-gray-100 '>
    <div className=' px-[80px] py-5'>
      <div className='flex justify-between'>
       <div className='w-[70%] text-2xl'>  <Link to='/'>Balaji K</Link></div>
         <div  className='w-[25%] flex justify-between'>
            <Link className='font-ubanto hover:text-gray-400' to="/product" >Products</Link>
            <a className='font-ubanto hover:text-gray-400' href="#about" >Resume</a>
            <a className='font-ubanto hover:text-gray-400' href="#services">Sample PRD</a>

           
         </div>
      </div>
     
    </div>
    </main>
  )
}

export default ResponsiveAppBar