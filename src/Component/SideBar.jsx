import React from 'react'
import linkin from "../assert/link.png"
import github from "../assert/gith.png"
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll';


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
            <Link className='font-ubanto' to="/product"><p className='hover:scale-110 transition'>Products</p></Link>
            <Scroll.Link className='font-ubanto' to="contact"   smooth={true} ><p className='hover:scale-110 transition'>About</p></Scroll.Link>
            <Scroll.Link className='font-ubanto' to="about"   smooth={true} ><p className='hover:scale-110 transition'>Skills</p></Scroll.Link>
            <Scroll.Link className='font-ubanto' to="exp"   smooth={true} ><p className='hover:scale-110 transition'>Experience</p></Scroll.Link>
            <Scroll.Link className='font-ubanto' to="touch"   smooth={true} ><p className='hover:scale-110 transition'>Contact</p></Scroll.Link>

           
            <div className='mx-auto absolute bottom-10'>
            <a href="https://github.com/Balaji-kkm" target="_blank" className='text-center ml-4' >
                <img src={github} alt="" height={65} width={65} className='hover:scale-110 transition'/>
              </a>
            

                <a href="https://www.linkedin.com/in/balaji-k-335bb4b6" target="_blank" className='text-center ml-[31px]' >
                  <img src={linkin} alt="" height={35} width={35} className='hover:scale-110 transition'/>
                </a>


            </div>

           
          </div>
        
    </main>

  )
}

export default SideBar