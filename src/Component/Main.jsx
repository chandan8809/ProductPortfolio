import React from 'react'
import { motion,useScroll } from "framer-motion";




const Main = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-20", "start"]
  });

  return (
    <main className='bg-gray-100'>
     
      {/* mobile */}
      <div className='px-6 font-link py-16 space-y-6   mx-auto lg:hidden'>
        <header className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block'>A LITTLE <br/> ABOUT ME</header>
        
          <p className=' text-gray-800 font-serif' >Product & Quality analyst with two year of experience.
plays a key role in delighting customers and advancing the goals of the business,
gathering and analyzing customer feedback, working with cross-functional teams to bring products to market,
and supporting the product launch process, and as well as experience with product development and management</p>
      </div>

        {/* desktop */}

      
       <div className='hidden lg:block lg:w-[calc(100%-110px)] lg:ml-auto lg:mr-0 h-[120vh]'>
        <div style={{ 
            backgroundImage: "url(https://cdn.pixabay.com/photo/2017/07/31/16/12/laptop-2558666_1280.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height:"90vh"

            }}>
          <div className='h-[100vh]'>
            <div className='px-64 py-32' 
 >
              <motion.p 
                className='text-7xl text-gray-600  inline-block font-base font-ubanto' 
                initial={{x:-200,opacity:0}} 
                animate={{ x: 0, opacity:1 ,transition:{duration:"2",type:"spring"} }} 
                transition={{ type:"spring", duration: 2 ,delay: 0.2,bounce:0.5}}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                >HELLO,<br/> I'AM<br/>BALAJI K</motion.p>

              <motion.p ref={ref} style={{ scale: scrollYProgress,transformOrigin: "10%" }} className='uppercase text-4xl text-gray-800 pt-8 font-bold tracking-wide font-ubanto'>product analyst </motion.p>
            </div>
          </div>
 
          <div className='absolute bg-white bottom-[-120px] w-[80%] left-28 right-0 mx-auto p-12 text-gray-800 bg-gradient-to-br from-white to-gray-50 shadow-lg  ' id='contact'>
          <header className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block mb-8 font-ubanto'>A LITTLE ABOUT ME</header>
           
            <p className=' pt-2 text-xl font-link font-light' >Product & Quality analyst with two year of experience.
plays a key role in delighting customers and advancing the goals of the business,
gathering and analyzing customer feedback, working with cross-functional teams to bring products to market,
and supporting the product launch process, and as well as experience with product development and management </p>
            
          </div>

        
        </div>
       </div>

    </main>
   
  )
}

export default Main