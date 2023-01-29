import React, { useEffect } from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import {  Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion';


const MainBlog = () => {
  const location=useLocation()
  console.log("loca",location)
  useEffect(()=>{
    topFunction()  
   },[location])

   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <main >
        <ResponsiveAppBar/>
        <AnimatePresence>
          <motion.div className='px-16' animate={{y:"0px",opacity:1, transition: {
          type: "spring",
          damping: 20,
          stiffness: 100,
        } }} initial={{y:"200px",opacity:0}} exit={{y:"-100px",opacity:0}}>
          <div>
              <p className='text-5xl text-center py-28 leading-[60px] text-gray-800 font-sans font-ubanto'> Products</p>

          </div>
        
          <section className="section">
            <div className="container border-gray-500 ">
        
              <div className='h-500px rounded-lg '>
                <img
                  src="https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg"
                  alt="Avatar"
                
                  className="object-cover h-[400px] w-full overflow-hidden"
                />
              </div>
          
              <Link to="/tezpos">
            
              <div className="overlay-top">
                <div className="text ">Tez Pos</div>
              </div>

              </Link>
            </div>
            

            <div className="container">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
                alt="Avatar"
                className="object-cover h-[400px] w-full"
              />
              <Link to="/Consumer">
              <div className="overlay-top">
                <div className="text">Apna Mart</div>
              </div>
              </Link>
            </div>

            <div className="container">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png"
                alt="Avatar"
                className="object-cover h-[400px] w-full"
              />
              <Link to="/Store">
              <div className="overlay-top">
                <div className="text">Apna Store</div>
              </div>
              </Link>
            </div>

      
      </section>

          <div className='w-[1000px] mx-auto font-ubanto py-20'>
              
          </div>

          </motion.div>
        </AnimatePresence>
    

    </main>
  )
}

export default MainBlog