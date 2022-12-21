import React from 'react'

const SideBar = () => {
  return (
    <main className="sidenav hidden lg:block">
        <div>
            <img
              className="w-ful"
              src="//www.luisjurado.me/wp-content/uploads/2020/04/LuisJurado2a.png"
              alt="logo"
            />
          </div>
          <div className='text-center pt-6'>
            <a href="#about">About</a>
            <a href="#services">Project</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>

          </div>
        
    </main>

  )
}

export default SideBar