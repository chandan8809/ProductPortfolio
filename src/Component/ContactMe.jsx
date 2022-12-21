import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const ContactMe = () => {
  return (
    <main className='px-6 py-16 space-y-6  bg-gray-500 text-center mx-auto lg:w-[calc(100%-100px)] lg:ml-auto lg:mr-0'>
        <p className='uppercase text-5xl font-semibold text-white'>Fell free to contact me</p>
        <div className='pt-8'>
         <MailOutlineIcon className='svg_icons_mail'/>
        </div> 
      
        <form action="https://formsubmit.co/your@email.com" method="POST" className='flex flex-col items-center gap-6 pt-10'>
            <input type="text" name="name" placeholder='name' required/>
            <input type="email" name="email" placeholder='Email' required/>
            <button type="submit">Send</button>
        </form>
        
        
       

    </main>
  )
}

export default ContactMe