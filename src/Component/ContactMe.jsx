import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const ContactMe = () => {
  return (
    <main id='touch' style={{ 
      backgroundImage: "url(https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_1280.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      height:"70vh"

      }} className='px-6 py-16 space-y-6  bg-gradient-to-br from-slate-700 to-yello-700 text-center mx-auto lg:w-[calc(100%-110px)] lg:ml-auto lg:mr-0'>
        <p className='uppercase text-5xl font-semibold font-ubanto text-gray-600'>Fell free to contact me</p>
        <div className='pt-8 text-black'>
         <MailOutlineIcon className='svg_icons_mail primary' style={{ color: 'gray' }}/>
        </div> 
        
      
        <form action="https://formsubmit.co/balaji443.bk@gmail.com" method="POST" className='flex flex-col items-center gap-6 pt-10'>
            {/* <input type="text" name="name" placeholder='name' required/>
            <input type="email" name="email" placeholder='Email' required/>
            <button type="submit">Send</button> */}

            <TextField  type="text" name="name" placeholder='name'  id="filled-basic" label="Name" variant="outlined" style={{background: "white",width:"300px"}}/>
            <TextField  type="email" name="email" placeholder='Email'  id="filled-basic" label="Email" variant="outlined" style={{background: "white",width:"300px"}}/>
         
            <Button  type="submit" variant="contained" style={{width:"200px"}}>Send</Button>
        </form>
        
        
       

    </main>
  )
}

export default ContactMe