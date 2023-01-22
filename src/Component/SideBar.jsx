import React from 'react'
import linkin from "../assert/link.png"
import github from "../assert/gith.png"

const SideBar = () => {
  return (
    <main className="sidenav hidden relative  lg:block">
        <div>
            <img
              className="w-ful"
              src="//www.luisjurado.me/wp-content/uploads/2020/04/LuisJurado2a.png"
              alt="logo"
            />
          </div>
          <div className='text-center pt-6'>
            <a href="#about">About</a>
            <a href="#services">Products</a>

            <a href="#contact">Contact</a>
            <div className='mx-auto absolute bottom-10'>
            <a href="https://github.com/Balaji-kkm" target="_blank" className='text-center ml-4' >
                <img src={github} alt="" height={65} width={65}/>
              </a>
            

                <a href="https://www.linkedin.com/in/balaji-k-335bb4b6" target="_blank" className='text-center ml-[31px]' >
                  <img src={linkin} alt="" height={35} width={35}/>
                </a>


            </div>

           
          </div>
        
    </main>

  )
}

export default SideBar