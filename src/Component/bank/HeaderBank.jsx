import React from 'react'
import calanderLogo from '../../assert/two.svg'
import companyLogo from '../../assert/one.svg'
import companLogo from '../../assert/three.svg'
import notification from '../../assert/Notification.svg'
import { Button } from '@mui/material'
import { useState } from 'react'


const HeaderBank = () => {
  const [cout,setCout]=useState(0)
  let arr=[[1,2,3],[1,23,4]];
  console.log("coou",arr)
  return (
    <div className='max-w-lg mx-auto'>
      <Button onClick={()=>arr.forEach(each=>each=[])}>del</Button>
      <Button onClick={()=>setCout(cout+1)}>Incle</Button>

       <p>cpimt{arr},{cout}</p>
      <div className='flex px-6 py-4 justify-between shadow-md'>
        <div>

         <img src={calanderLogo } alt="logo" className='w-32' />
        </div>

        <div className='flex gap-4 items-center'>
          <img src={companyLogo} alt="logo" className='w-6'/>
          <img src={notification} alt="logo"className='w-6'/>
          <img src={companLogo} alt="logo" className='w-6'/>
        </div>
      </div>

     
    </div>
  )
}

export default HeaderBank