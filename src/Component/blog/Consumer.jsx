import React, { useEffect } from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import tespos from "../../assert/tezpos.png"
import customer from "../../assert/customer.png"
import dashboard from "../../assert/hori.png"
import cm3 from "../../assert/cm3.webp"
import cm1 from "../../assert/cm1.webp"
import cm2 from "../../assert/cm2.webp"
import cm4 from "../../assert/cm4.webp"
import cm5 from "../../assert/cm5.webp"
import cm6 from "../../assert/cm6.webp"
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Consumer = () => {
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
            <p className='text-6xl  font-semibold text-gray-800 '>Apna Mart </p>
            <p className='w-[800px]   py-16 text-lg font-light mx-auto  text-gray-400'>Apna Mart’s grocery delivery App (B2C),lets people choose from over four thousand popular products like groceries, dairy, personal care, baby care & more at the most discounted rates. 
			Moreover, with Apna Mart online grocery shopping app, you don’t have to order a month’s store at once because there is no minimum order value in Apna Mart app either!</p>
            <div className='rounded-lg '>
              <img
                src={cm1}
                alt="Avatar"
                className="object-cover w-[80%] overflow-hidden border-2 mx-auto"
              />
            </div>
            <div className='text-left w-[650px] mx-auto py-20'>
                <p className='text-2xl'>MY ROLE</p>
                <p className='list-disc text-gray-400 space-y-6 py-5'>Overall responsibility for driving customer retention,Conducted customer interviews and user research to drive a key dashboard redesign with customer centricity in mind
			when ever new features are getting introduce to customers getting monitor 
		 </p>
    <p className='list-disc text-gray-400 space-y-6 pb-5'>After Improving and encasement the online Shopping and campaigns, Pushing the online sales to 280.5k ave per day,
			Work on the Consumer Grocery app, ensure the customer's needs and track them with events, implement new features, and boost the daily order to 500 per day</p>
                
            </div>

            <div className='text-left w-[950px] mx-auto  flex pt-10 gap-24'>
                <div className='rounded-lg '>
                <img
                    src={cm4}
                    alt="Avatar"
                    className="object-cover overflow-hidden mx-auto"
                />
                </div>
                <div className=''>
                   <div className='text-left w-[550px] mx-auto px-10'>
                        <p className='text-2xl'>Product</p>
                        <p className='list-disc py-5  text-gray-400 space-y-6 '>This App mainly focus on online customer who could not able  reach the Retail store, so they can order from home, this will boost our company insights and gain customer engagement.</p>
                        <p className='list-disc  text-gray-400 space-y-6 '>Top Features:
                        <br></br>
                                <p>1. Amazing Category page and PLP page  </p>
                                <p>2. Offer coupon apply </p>
                                <p>3. Delivery slot(Now or Later)</p>
                                <p>4. Payments-Integrated all methods of payment gateway </p>
                                <p>5. Order Tracking - When User places an order, they can track there order status </p>

                                </p>
                    </div>
                </div>
                
            </div>
            <div className='py-32 flex w-[85%] mx-auto'>
              <img
                      src={cm3}
                      alt="Avatar"
                      className="object-cover w-[20%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={cm2}
                      alt="Avatar"
                      className="object-cover w-[20%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={cm5}
                      alt="Avatar"
                      className="object-cover w-[20%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={cm6}
                      alt="Avatar"
                      className="object-cover w-[20%] overflow-hidden border-2 mx-auto"
                  />

            </div>
          
        </div>

        <div className='text-left w-[550px] mx-auto pb-20'>
                <p className='text-2xl'>METRICS</p>
                <ul className='list-disc px-10 text-gray-400 space-y-6 '>
                  <li className='pt-4'>500 order per day through Apna Mart app </li>
                  <li>84% of actions performed through the PLP & Catogery pages</li>
                  <li>The highest action engagement (25%) came from a user who came through by applying coupon to place orders</li>
                  <li>Sales ATS 100k minimum of 10 stores in each cities</li>
              
                </ul>
            </div>



       </motion.div>
    
    </main>
  )
}

export default Consumer