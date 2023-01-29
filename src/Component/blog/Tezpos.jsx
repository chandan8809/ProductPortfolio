import React, { useEffect } from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import tespos from "../../assert/tezpos.png"
import customer from "../../assert/customer.png"
import dashboard from "../../assert/hori.png"
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Tezpos = () => {
   const location=useLocation()

   useEffect(()=>{
    console.log("why ot")
    topFunction()  
   },[location])

   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   }

  return (
    <main>
       <ResponsiveAppBar/>
       <motion.div className='content font-ubanto text-center pt-16' animate={{y:"0px",opacity:1, transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      } }} initial={{y:"200px",opacity:0}}>
        <div >
            <p className='text-6xl  font-semibold text-gray-800 '>Tezpos</p>
            <p className='w-[800px]  py-16 text-lg font-light mx-auto  text-gray-400'>TEZpos is a cloud based pos system designed (B2B) for highly efficient store & inventory management,
		sale is the speed of billing,Purchase is the accuracy and in-warding only received items, 
		Inventory is the accurately maintaining the batch wise stock, able to take a snapshot at any moment and realtime PSV</p>
            <div className='rounded-lg '>
              <img
                src={tespos}
                alt="Avatar"
                className="object-cover w-[80%] overflow-hidden border-2 mx-auto"
              />
            </div>
            <div className='text-left w-[550px] mx-auto py-20'>
                <p className='text-2xl'>MY ROLE</p>
                <p className='text-gray-400  pt-8 text-lg font-light'>For this exciting product, I worked Product and quality-wise. analyze, and interpret data to inform the development and improvement of a product to understand customer needs, market trends, and product performance . 
		 </p>
    <p className='text-gray-400  pt-4 text-lg font-light'>They then use this information to make recommendations and drive decision-making for the product team. they may also be responsible for monitoring and reporting on the performance of a product once it has been released.  </p>
                <p className='text-gray-400  pt-4 text-lg font-light'>Additionally, took ownership of the product as it a user-friendly a bug-free before release,Cross Checking all the sales and Inventory management ,Gain Average Sales of 100K per day
		 Tested with an automation tool like selenium(python) for the website  and Appium for the mobile version  </p>
            </div>

            <div className='text-left w-[950px] mx-auto  flex pt-10  gap-24'>
                <div className='rounded-lg '>
                <img
                    src={customer}
                    alt="Avatar"
                    className="object-cover overflow-hidden mx-auto"
                />
                </div>
                <div className=''>
                   <div className='text-left w-[550px] mx-auto px-10'>
                        <p className='text-2xl'>Product</p>
                        <p className='text-gray-400  pt-8 text-lg font-light'>TEZpos will be used in our franchise stores by store owners, managers, and sales staff in the stores. All the users of this product range from very less educated to highly educated professionals.</p>
                        <p className='text-gray-400  pt-4 text-lg font-light'>The expectation of the users from the product is to function very fast and smoothly even with very less bandwidth. As a company, it will give all the stakeholders (Warehouse - automated PI, Offline - Better Automated Ordering, Online - Real Time Inventory, Easy Billing) an extra edge. </p>
                        <p className='text-gray-400  pt-4 text-lg font-light'>The most critical pieces of this product are Sale, Purchase, and Inventory</p>
                        <p className='text-gray-400  pt-4 text-lg font-light'>Top Objectives 
                                <p>1. Build a fast & reliable Sales Billing POS </p>
                                <p>2. Maintain accurate stock & stock visibility </p>
                                <p>3. Provide complete control over all functionalities critical</p>
                                <p>4. Easy to navigate and use by end users </p>
                                <p>5. In-built User & Security management </p>
                                <p>6. Unable to integrate with other internal solutions/services</p>
                                </p>
                    </div>
                </div>
                
            </div>
            <div className='py-32'>
              <img
                      src={dashboard}
                      alt="Avatar"
                      className="object-cover w-[80%] overflow-hidden border-2 mx-auto"
                  />

            </div>
          
        </div>

        <div className='text-left w-[550px] mx-auto pb-20'>
                <p className='text-2xl'>METRICS</p>
                <ul className='list-disc px-10 text-gray-400 space-y-6 '>
                  <li className='pt-4'>130+ Store have Enabled & integrated POS Software</li>
                  <li>6000+ Bills trans happens through POS sytem </li>
                  <li>Every Month 20% of New User are making a Sale at the store</li>
              
                </ul>
            </div>



       </motion.div>
    
    </main>
  )
}

export default Tezpos