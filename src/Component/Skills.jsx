import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AttributionIcon from '@mui/icons-material/Attribution';

import ScrollAnimation from 'react-animate-on-scroll';


const Skills = () => {
  return (
    
    <main className='px-6 py-16 space-y-6  bg-gray-100 mx-auto  lg:bg-gray-50'>
        <div className='lg:w-[calc(100%-200px)] lg:ml-auto lg:mr-0'>
            <p className='text-3xl font-semibold tracking-wide border-b-4 border-red-500 inline-block'>WHAT I DO</p>
            <div className='flex flex-col  items-center gap-20 lg:flex-row lg:pt-20 lg:flex-wrap'>

                <div className='flex flex-col items-center gap-10'>
                    <ManageAccountsIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
                
                <div className='flex flex-col items-center gap-10 '>
                    <WorkHistoryIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
                <div className='flex flex-col items-center gap-10 '>
                    <StackedBarChartIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
                <div className='flex flex-col items-center gap-10 '>
                    <AttributionIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
                <div className='flex flex-col items-center gap-10 '>
                    <AttributionIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
                <div className='flex flex-col items-center gap-10 '>
                    <AdUnitsIcon className='prd'/>
                    <p>PRODUCT MANAGER</p>
                </div>
            

            </div>
        </div>

    </main>
  )
}

export default Skills