import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {motion} from "framer-motion"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import hicet from '../assert/hicet.jpeg'
import Worksbot from '../assert/worksbot.png'
import codingmart from '../assert/codingmart.png'
import code from '../assert/code.png'
import AM from '../assert/AM.svg'




const Education = () => {
  const ref=useRef(null)
  const ref2=useRef(null)
  const isInView=useInView(ref,{
    margin: "300px 0px -300px 0px"
  })
  const isInView2=useInView(ref2,{
    margin: "600px 0px 600px 0px"
  })
  console.log("is",isInView)
  console.log("is2",isInView2)

  let status= isInView ? "active" : "inactive" 
  let status2= isInView2 ? "active" : "inactive" 
  const childLeft={
    active:{
      opacity:1,
      x:0,
      scale:1
    },
    inactive:{
      opacity:0,
      x:50,
      scale:1
    }
  }

  const childRight={
    active:{
      opacity:1,
      x:0,
      scale:1
    },
    inactive:{
      opacity:0,
      x:-50,
      scale:1
    }
  }

  const container = {
    hidden: { opacity: 0,y:"40px"},
    show: {
      opacity: 1,
      y:"0px",
      transition: {
        staggerChildren: 0.1,
        type:"tween"
      },
    },
  
  }
    
  return (
    <div className=' bg-gray-100  lg:bg-gray-100' id='exp'>
  
    <main className="px-6 py-16 space-y-6  mx-auto lg:w-[calc(100%-210px)] lg:ml-auto lg:mr-0 ">
      <p ref={ref} className="text-3xl  font-semibold tracking-wide border-b-4 border-red-500 inline-block uppercase font-ubanto">
       experience
      </p>

      <motion.div variants={container}  animate="show"
               initial="hidden"
               exit="hidden" className='pr-20'>
      <Timeline position="alternate">
      <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
         <motion.div className='text-red-500' variants={childRight} transition={{duration:1,transition:{type:"spring"}}} animate={status} initial={false}>

        May 2022 - Present
        
         </motion.div>
          </TimelineOppositeContent>
        
    
        <TimelineSeparator>
          
          <motion.div whileHover={{ scale: 1.2 }}>
          <TimelineDot color="primary" variant="outlined">
            <BusinessCenterIcon color='primary'/>
          </TimelineDot>
            </motion.div>
          <TimelineConnector sx={{ bgcolor: 'red' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <motion.div variants={childLeft} transition={{duration:1}} animate={status} initial={false}>
         <div className='border-2  inline-block p-4 bg-gradient-to-br from-white to-blue-50 rounded-md '>
          <Typography variant="h6" component="span">
            
              <div className='flex relative'>
              <div className=''>
                <p className='text-base font-bold'>APNAMART</p>

              </div>
              
               
                <div className='mt-2 absolute top-[-5px] right-[0px]'>
                  <img   src={AM} alt="" height={30} width={180} />
                </div>

             </div>
        
            </Typography>
            
            
            
            <Typography> <p className='text-cyan-900'>Product Analyst</p>
<p className='pt-2 text-xs'> Facilitated Online Grocery app-B2C with the help of Mixpanel, monetization the Online Customer Sales AVG 500 orders & 300k per day sales </p>
<p className='pt-2 text-xs'> POS(point of sale)-B2B software to measure the total sales & Purchase,analyzing KPIs with help of Google Data Studio,Gaining Average offline Sales of 100K per retail store.
integrated with POS system.</p>
<p className='pt-2 text-xs'>Assisted QA teams to create test strategies, and test cases, and maintain test plans and logs. with extra interest done
Automation testing for the Product both the android and Web app</p>
 </Typography>
         </div>
        </motion.div>

        
   

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <motion.div className='text-red-500' variants={childLeft} transition={{duration:1, delay:"0.4",transition:{type:"spring"}}} animate={status} initial={false}>

Mar 2021 - Apr 2022

 </motion.div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'red' }}/>
          <TimelineDot color="primary" variant="outlined">
            <BusinessCenterIcon color='primary'/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'red' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

        <motion.div className='text-left ' variants={childRight} transition={{duration:1, delay:"0.4"}} animate={status} initial={false}>
         <div className='border-2  inline-block p-4 bg-gradient-to-bl  bg-white rounded-md  from-white to-blue-50'>
          <Typography variant="h6" component="span">
              
          <div className='flex relative'>
              <div className=''>
                <p className='text-base font-bold'>Codingmart Technologies</p>

              </div>
              
               
                <div className='mt-2 absolute top-[-5px] right-[0px]'>
                  <img   src={code} alt="" height={30} width={180} />
                </div>

             </div>
            </Typography>
            <Typography> <p className='text-cyan-900'>Product Engineer</p>
<p className='pt-2 text-sm'> Developed a hotel reservation Platform for 2hub agency,Executed a Inbound & Outbound module for Tourism customers,Worked on Payment modules & Access to online payments,financing, and increased credit limits by 20%.</p>
 </Typography>
            
         </div>
        </motion.div>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
        
        <motion.div variants={childRight} transition={{duration:1,delay:'0.8',transition:{type:"spring"}}} animate={status2} initial={false}>

        <p ref={ref2} className='text-red-500'>Jan 2021 - Mar 2021</p>
        
         </motion.div>
        
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'red' }}/>
          <TimelineDot color="primary" variant="outlined">
            <BusinessCenterIcon color='primary'/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'red' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
          <motion.div variants={childLeft} transition={{duration:1,delay:"0.8"}} animate={status2} initial={false}>
         <div className='border-2  inline-block p-4 bg-gradient-to-br from-white to-blue-50 rounded-md '>
          <Typography variant="h6" component="span">
            
              <div className='flex relative'>
              <div className=''>
                <p className='text-base font-bold'>Worksbot</p>

              </div>
              
               
                <div className='mt-2 absolute top-[-30px] right-[0px]'>
                  <img   src={Worksbot} alt="" height={30} width={180} />
                </div>

             </div>
        
            </Typography>
            
            
            
            <Typography> <p className='text-cyan-900'>Student-Intern(Summer Internship)</p>
<p className='pt-2 text-sm'> Led a Team on a Customer Support Ticket System Software, which will notify the client when users raised any queries on their product
Created a dashboard module with all the pending tickets.</p>
 </Typography>
         </div>
        </motion.div>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
        
        <motion.div className='text-red-500' variants={childLeft} transition={{duration:1,delay:"1.2",transition:{type:"spring"}}} animate={status2} initial={false}>

          Aug 2017 - March 2021

          </motion.div>
        
          </TimelineOppositeContent>
        <TimelineSeparator>
          
          <TimelineConnector sx={{ bgcolor: 'red' }} />
          
          <TimelineDot color="primary" variant="outlined">
            
            <SchoolIcon color='primary'/>
            
          </TimelineDot>
          
          <TimelineConnector sx={{ bgcolor: 'red' }}/>
          
        </TimelineSeparator>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>


        <motion.div  className='text-left ' variants={childRight} transition={{duration:1,delay:"1.2",transition:{type:"spring"}}} animate={status2} initial={false}>
         <div className='border-2  inline-block p-4 bg-white rounded-md bg-gradient-to-bl from-white to-blue-50'>
          <div className='flex pb-2 '>
          <Typography variant="h6" component="span">
            <div className='flex relative'>
              <div className=''>
                <p className='text-sm font-bold'> HINDUSTHAN COLLEGE OF ENGINEERING AND TECHNOLOGY(BACHELORS OF ENGINEERING)</p>

              </div>
              
               <div className=' invisible'>
                  <img   src={hicet} alt="" height={10} width={300} />
                </div>

                <div className='mt-2 absolute right-[-10px]'>
                  <img   src={hicet} alt="" height={30} width={180} />
                </div>

             </div>
        
            
              
            
        
            </Typography>
              {/* <img src={bag} alt="" /> */}

          </div >
            <Typography > <p className='text-cyan-900 pb-2 mt-[-5px]'>  Focus:Computer Science Engineering </p></Typography>
            <Typography>GPA: 7.5/10</Typography>
            <Typography>Engrossed in developing and maintaining large software systems</Typography>
         </div>
        </motion.div>

   
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      </motion.div>

    </main>
    </div>
  );
}


export default Education