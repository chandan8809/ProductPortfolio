import React from 'react'

import Hamburger from './Hamburger';

const Header = () => {
  return (
    <main>
      <div className="w-full h-[56px] bg-gray-800  text-white flex items-center justify-between max-w-screen-lg mx-auto lg:hidden">
        <div className='flex gap-2'>
          <div>
            <img
              className="w-full h-[56px]"
              src="https://www.luisjurado.me/wp-content/uploads/2020/04/LuisJurado2a.png"
              alt="logo"
            />
          </div>
          <div>
            <p className="text-base">Balaji K</p>
            <p className="italic font-light text-sm">
              Product Manager
            </p>
          </div>
        </div>
        

        <div >
          
          <Hamburger/>
        </div>
      </div>
    </main>
  );
}

export default Header