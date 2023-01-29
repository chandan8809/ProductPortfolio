import React, { useEffect } from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import tespos from "../../assert/tezpos.png"
import customer from "../../assert/customer.png"
import dashboard from "../../assert/hori.png"
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import st1 from "../../assert/st1.webp"
import st2 from "../../assert/st2.webp"
import st3 from "../../assert/st3.webp"
import st5 from "../../assert/st4.jpeg"
import st4 from "../../assert/st5.jpeg"
import st6 from "../../assert/st6.jpeg"
import st7 from "../../assert/st7.jpeg"
import st8 from "../../assert/st8.png"

const Store = () => {
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
            <p className='text-6xl  font-semibold text-gray-800 '>Apna Store</p>
            <p className='w-[800px] text-gray-400  py-2 text-lg font-light mx-auto text-left pt-8'><span className='text-black font-bold'>Sales:</span> The customer places an online order to a particular store, which will reflect in the store app, like an order summary, once the store confirms their order with the customer, they will start packing and generating a bill on Tez, this will happen in respective time allocation</p>
			<p className='w-[800px] text-gray-400  py-4 text-lg font-light mx-auto text-left pb-20'><span className='text-black font-bold'>Purchase:</span> When the store wants to purchase an order from the local Vendors or Fleet lab vendors, they can able to start purchasing an item through the app based on their inventory.</p>
            <div className='rounded-lg '>
              <img
                src={st8}
                alt="Avatar"
                className="object-cover w-[80%] overflow-hidden border-2 mx-auto"
              />
            </div>
            <div className='text-left w-[550px] mx-auto py-20'>
                <p className='text-2xl'>MY ROLE</p>
                <p className='text-gray-400  pt-8 text-lg font-light'>In the Sales module, Analyse the Metrics on the customer's daily sales on which products they order more and getting the orders to the store.</p>
                <p className='text-gray-400  pt-4 text-lg font-light'>When customers cancel their order what cause, due to product or late delivery, how many orders are close to SLA(service-level agreement)
			        whether it's in pending packing delay or pending delivery delay.</p>
	
    <p className='text-gray-400  pt-4 text-lg font-light'>In every month how much the graph pinned above from the previous month, 
			  having a discussion with business people about the customer's flaws datas ,how we can overcome the sales in a product strategy meeting.</p>
                
            </div>

            <div className='text-left w-[950px] mx-auto  flex pt-10  gap-24'>
                <div className='rounded-lg  '>
                <img 
                    src={st6}
                    alt="Avatar"
                    className="object-cover overflow-hidden mx-auto border"
                />
                </div>
                <div >
                   <div className='text-left w-[550px] mx-auto px-10'>
                        <p className='text-2xl'>Product</p>
                        <p className='text-gray-400  pt-4 text-lg font-light'>This App mainly focus on online customer and Purchase Items to the Retail store from different Vendors</p>
                        <p className='text-gray-400  py-4 text-lg font-light'>Top Features:
                                <p className='pt-4'>1. User places the order </p>
                                <p className='pt-4'>2. The store receives the order
                                Full Order confirmation/Partial order confirmation milestone - T time buzzer
 	<li className='pl-4'>Full Order confirmation - then order dispatch time starts</li>
    <li className='pl-4'> Partial order confirmation - In case of items missing, store will click on partial order. But order won’t be cancelled, instead CS will get notified. CS will call store and understand. CS will call users, inform, cross sell and update store accordingly. </li>
<li className='pl-4'>In case none of the items are there, stores will click on products not available. But the order won’t be canceled, instead, CS will get notified. CS will call the store to confirm . CS will call users, inform, ask them if they want to reschedule it when stock arrives/notify them. CS will also inform the business team</li>
</p>
                                <p className='pt-4'>3. If Customer agrees - order dispatch ,If customer refuses - order cancel </p>
                                <p className='pt-4'>4. When the Store wants to purchase some items to their store, they can able to place an order with the right products with Qty.</p>

                                </p>
                    </div>
                </div>
                
            </div>


            <div className='py-32 flex w-[85%] mx-auto'>
              <img
                      src={st4}
                      alt="Avatar"
                      className="object-cover w-[22%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={st5}
                      alt="Avatar"
                      className="object-cover w-[22%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={st6}
                      alt="Avatar"
                      className="object-cover w-[22%] overflow-hidden border-2 mx-auto"
                  />
              <img
                      src={st7}
                      alt="Avatar"
                      className="object-contain w-[22%] overflow-hidden border-2 mx-auto"
                  />

            </div>
          
        </div>



       </motion.div>
    
    </main>
  )
}

export default Store