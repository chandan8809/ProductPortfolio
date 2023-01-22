import React from 'react'
//import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Button, duration } from '@mui/material';
import {motion} from "framer-motion"

const FramerAdvance = () => {
    let [step,setStep]=useState(1)
  return (
    <div className='flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-blue-800'>
        <div className='mx-auto w-full max-w-md rounded-2xl bg-white'>
            <div className='flex justify-between rounded p-8'>
                <Step step={1} currentStep={step}/>
                <Step step={2} currentStep={step}/>
                <Step step={3} currentStep={step}/>
                <Step step={4} currentStep={step}/>
            </div>
            <div className='px-8 pb-8'>
                <div>
                    <div className='mt-2 h-6 w-40 rounded bg-slate-100'/>
                    <div className='mt-4 space-y-2'>
                        <div className='h-4 w-5/6 rounded bg-slate-100'/>
                        <div className='h-4 rounded bg-slate-100'/>
                        <div className='h-4 w-4/6 rounded bg-slate-100'/>
                    </div>
                </div>

                <div className='mt-10 flex justify-between'>
                    
                   <Button onClick={()=>setStep(step>1 ? step-1 : 1)} variant="outlined" style={{width:'140px'}}>Cancel</Button>
                   <Button onClick={()=>setStep(step+1)} variant="contained" style={{width:'140px'}}>Continue</Button>
                  
                    
                </div>

            </div>
        </div>

    </div>
  )
}

export default FramerAdvance



function Step({step,currentStep}){
    let status=currentStep===step ?"active":currentStep<step ? "inactive" : "complete"

    return(
        <div className='relative'>
            <motion.div 
             animate={status}
             variants={{
                complete:{
                    scale:1.25,
                  
                   
                },
                active:{
                    active:1,
                    transition:{
                        delay:0,
                        duration:.2
                    }
                }
             }}
              className='absolute inset-0 bg-blue-200 rounded-full '
              transition={{delay:0.2,duration:0.5}}
              >
            </motion.div>
             
           <motion.div
            initial={false} //mound animation
            animate={{
                background:
                status==="complete"? "var(--blue-500)" :"#fff",
                borderColor: 
                status==="complete" ||  status==="active"? "var(--blue-500)" :"var(--slate-200)",
                color:
                status==="complete" ||  status==="active"? "var(--blue-500)" :"var(--slate-400)",
                }}

            variants={{
                inactive:{
                    background:"#fff",
                    borderColor:"var(--slate-200)",
                    color:"var(--slate-400)"
                },
                active:{
                    background:"#fff",
                    borderColor:"var(--blue-500)",
                    color:"var(--blue-500)"
                },
                complete:{
                    background:"var(--blue-500)",
                    borderColor:"var(--blue-500)",
                    color:"var(--blue-500)"
                }
            }}  
            
            transition={{duration:0.2}}  

            className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold` }
            >
                <div className='flex items-center justify-center'>
                    {status ==="complete" ?(
                        <CheckIcon className='h-6 w-6 text-white'/>
                    ):(
                        <span>{step}</span>
                    )}

                </div>

            </motion.div>

        </div>
      
    )

}


function CheckIcon(props){
    return(
        <svg
          {...props}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
            <motion.path
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
                delay:0.2,
                duration:0.3,
                type:"tween",
                ease:"easeOut"
            }}
             strokeLinecap="rounded"
             strokeLinejoin="rounded"
             d="M5 13l4 4L19 7"
            />

        </svg>
    )
}