import React from 'react'

import setting from "../assert/cogs-solid.svg"
// import python from "../assert/"

import busness from "../assert/business-time-solid.svg"
import product from "../assert/product.png"
import sel from "../assert/selenium.png"
import py from "../assert/py.png"
import sprint from "../assert/sprint.png"
import app from "../assert/appium.svg"
import database from "../assert/database.png"
import looker from "../assert/looker.png"
import mixpanel from "../assert/mix.svg"





const Skills = () => {
  return (
    
    <main className='px-6 pt-16 pb-20 space-y-6  bg-gray-100 mx-auto  lg:bg-gray-100' id='about'>
        <div className='lg:w-[calc(100%-210px)] lg:ml-auto lg:mr-0'>
            <p className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block font-ubanto mb-10 lg:mb-0'>WHAT I DO</p>
            <div className='flex flex-col  lg:items-center gap-20 lg:flex-row lg:pt-20 lg:flex-wrap px-16'>

                <div className='flex  items-start gap-5 ml-[-20px] lg:ml-0 flex-[20%] '>
                    <img src={product} alt="" className='w-20 h-20' />
                    <p className=''>PRODUCT MANAGEMENT</p>
                </div>

                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={mixpanel} alt="" className='w-20 h-[70px]'/>
                    <p className=''>MIXPANEL</p>
                </div>

                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={looker} alt="" className='w-[55px] h-[70px]'/>
                    <p className=''>DATA STUDIO</p>
                </div>
                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={sprint} alt="" className='w-20'/>
                    <p className=''>AGILE METHODOLOGY</p>
                </div>

               
                
                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={py} alt="" className='w-20 h-20'/>
                    <p className=''>PYTHON</p>

                </div>
                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={database} alt="" className='w-20'/>
                    <p className=''>SQL</p>
                </div>
                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={sel} alt="" className='w-20 h-[70px]'/>
                    <p className=''>SELENIUM</p>
                </div>
               
                
                <div className='flex  items-start gap-5 flex-[20%]'>
                    <img src={app} alt="" className='w-20'/>
                    <p className=''>APPIUM</p>
                </div>
                
                <div className='flex  items-start gap-5 flex-[20%] invisible'>
                    <img src={database} alt="" className='w-20'/>
                    <p className=''>SQL</p>
                </div>
                
               
            </div>
        </div>

    </main>
  )
}

export default Skills