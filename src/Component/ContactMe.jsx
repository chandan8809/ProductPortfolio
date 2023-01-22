import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, TextField } from '@mui/material';


const ContactMe = () => {
  return (
    <main className='px-6 py-16 space-y-6  bg-gradient-to-br from-slate-700 to-yello-700 text-center mx-auto lg:w-[calc(100%-110px)] lg:ml-auto lg:mr-0'>
        <p className='uppercase text-5xl font-semibold text-white'>Fell free to contact me</p>
        <div className='pt-8'>
         <MailOutlineIcon className='svg_icons_mail'/>
        </div> 
      
        <form action="https://formsubmit.co/your@email.com" method="POST" className='flex flex-col items-center gap-6 pt-10'>
            {/* <input type="text" name="name" placeholder='name' required/>
            <input type="email" name="email" placeholder='Email' required/>
            <button type="submit">Send</button> */}

            <TextField  type="text" name="name" placeholder='name'  id="filled-basic" label="Name" variant="filled" style={{background: "white",width:"300px"}}/>
            <TextField  type="email" name="email" placeholder='Email'  id="filled-basic" label="Email" variant="filled" style={{background: "white",width:"300px"}}/>
            <Button  type="submit" variant="contained" style={{width:"200px"}}>Send</Button>
        </form>
        
        
       

    </main>
  )
}

export default ContactMe