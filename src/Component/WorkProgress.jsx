import React from 'react'


import setting from "../assert/cogs-solid.svg"
// import python from "../assert/"
import search from "../assert/search.svg"
import paint from "../assert/paint.png"
import dev from "../assert/dev.png"
import green from "../assert/green.png"
import rocket from "../assert/rocket.png"
import test from "../assert/test.png"




const WorkProgress = () => {
  return (
    <div>
         
    <main className='px-6 py-16 space-y-6  bg-gray-100 mx-auto mt-[-200px] lg:mt-0 lg:bg-gray-100'>
        <div className='lg:w-[calc(100%-210px)] lg:ml-auto lg:mr-0'>
            <p className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block font-ubanto'>WORK PROCESS</p>
            <div className='pr-0 lg:pr-20'>
                <p className='text-xl lg:text-xl text-gray-500 pt-10 text-center font-extralight'>Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
            </div>
            <div className='flex flex-col  items-center lg:flex-row lg:pt-20 lg:flex-wrap  pr-0 pt-10 lg:pr-20'>

                <div className='flex flex-1 flex-col items-center gap-5 px-4 py-6 bg-white shadow-lg hover:scale-110 transition'>
                    <img src={search} alt="" className='w-20 h-20' />
                    <p className=''>EXPLORE</p>
                </div>
                <div className='flex flex-1 flex-col items-center gap-5  p-4 py-6 bg-gray-50 shadow-lg hover:scale-110 transition'>
                    <img src={green} alt="" className='w-20 h-20' />
                    <p className=''> IDEA</p>
                </div>
              
                <div className='flex flex-1 flex-col items-center gap-5  px-4 py-6  bg-gray-50 shadow-lg hover:scale-110 transition'>
                    <img src={paint} alt="" className='w-20 h-20' />
                    <p className=''>DESIGN </p>
                </div>
              
                <div className='flex flex-1 flex-col items-center gap-5  px-4 py-6 bg-white shadow-lg hover:scale-110 transition'>
                    <img src={dev} alt="" className='w-20 h-20' />
                    <p className=''>DEVELOP</p>
                </div>
              
                <div className='flex flex-1 flex-col items-center gap-5  px-4 py-6 bg-gray-50 shadow-lg hover:scale-110 transition'>
                    <img src={test} alt="" className='w-20 h-20' />
                    <p className=''>TEST</p>
                </div>
              
                <div className='flex flex-1 flex-col items-center gap-5  px-4 py-6 bg-white shadow-lg hover:scale-110 transition'>
                    <img src={rocket} alt="" className='w-20 h-20' />
                    <p className=''>LAUNCH</p>
                </div>       
               
            </div>
        </div>

    </main>
    </div>
  )
}

export default WorkProgress