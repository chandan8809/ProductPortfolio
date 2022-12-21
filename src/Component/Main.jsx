import React from 'react'
import { motion,useScroll } from "framer-motion";

const Main = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-20", "start"]
  });

  return (
    <main>
      {/* mobile */}
      <div className='px-6 py-16 space-y-6  mx-auto lg:hidden'>
        <header className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block'>A LITTLE <br/> ABOUT ME</header>
          <p className='text-2xl'>My superpower is my tenacity and my personal mantra is ‘never leave anything to chance’.</p>
          <p className=' text-gray-800 ' >product & Agile Coach with ten years of experience. Always challenging the status quo and appreciating non-conformity. A strong believer in diverse, cross-functional and empowered teams building and running products that people love. I discovered my passion for helping and </p>
      </div>

        {/* desktop */}

      
       <div className='hidden lg:block lg:w-[calc(100%-100px)] lg:ml-auto lg:mr-0 h-[125vh]'>
        <div style={{ 
            backgroundImage: "url(https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height:"90vh"

            }}>
          <div className='h-[100vh]'>
            <div className='p-32' 
 >
              <motion.p 
                className='text-7xl text-gray-600  inline-block' 
                initial={{x:-200,opacity:0}} 
                animate={{ x: 0, opacity:1 }} 
                transition={{ type:"spring", duration: 1 ,delay: 0.2,bounce:0.5}}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                >HELLO,<br/> I'AM<br/>LUIS JURADO</motion.p>

              <motion.p ref={ref} style={{ scale: scrollYProgress,transformOrigin: "10%" }} className='uppercase text-4xl text-gray-800 pt-8 font-bold tracking-wide'>product manager<br></br> & agile coach</motion.p>
            </div>
          </div>

          <div className='absolute bg-white bottom-[-200px] w-[80%] left-20 right-0 mx-auto p-12 text-gray-800'>
          <header className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block mb-8'>A LITTLE ABOUT ME</header>
            <p className='text-2xl uppercase'>My superpower is my tenacity and my personal mantra is ‘never leave anything to chance’.</p>
            <p className=' text-gray-800 pt-8 text-2xl' >Product & Agile Coach with ten years of experience. Always challenging the status quo and appreciating non-conformity. A strong believer in diverse, cross-functional and empowered teams building and running products that people love. I discovered my passion for helping and </p>
            
          </div>

        
        </div>
       </div>

    </main>
   
  )
}

export default Main