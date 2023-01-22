import React from 'react'
import correct from '../../assert/correct.svg'
import reload from '../../assert/reload.svg'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.0 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

const MainList = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [preferencesOpen,setPreferencesOpen]=React.useState(false)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  console.log('pre',preferencesOpen)
  const handleDelete=()=>{
    // let newVal=personName.filter((item)=>item!==value)
    // setPersonName(newVal)
    console.log("nothing hanppend")

  }



  return (
    <div className='pt-1 max-w-lg mx-auto'>
        <div className='bg-gray-50 px-6 py-4'>
            <p className='text-2xl text-gray-800'>Welcome John,</p>
            <p className='text-xs text-gray-400'>Your journey at Ibankey starts here.</p>
        </div>

        <div className=' px-6 py-4'>
            <div>
                <p className='text-xl text-blue-600'>Getting Started</p>
                <p className='text-xs text-gray-400'>Complete these steps for register yourself</p>
            </div>

            <div className='flex bg-blue-600 rounded-lg mt-4 justify-between p-3'>
                <div className='flex flex-col text-white gap-2'>
                    <p className='text-sm'>Which industry</p>
                    <p className='text-xs bg-green-500 inline px-2 rounded-md w-[78px]'>Completed</p>
                </div>
                <div className=''>
                  <img src={correct} alt="" />
                </div>
            </div>
            <div className='flex bg-blue-600 rounded-lg mt-2 justify-between p-3'>
                <div className='flex flex-col text-white gap-2'>
                    <p className='text-sm'>What all you do</p>
                    <p className='text-xs bg-green-500 inline px-2 rounded-md w-[78px]'>Completed</p>
                </div>
                <div className=''>
                  <img src={correct} alt="" />
                </div>
            </div>
            <div className='flex bg-blue-600 rounded-lg mt-2 justify-between p-3'>
                <div className='flex flex-col text-white gap-2'>
                    <p className='text-sm'>What product you need</p>
                    <p className='text-xs bg-green-500 inline px-2 rounded-md w-[78px]'>Completed</p>
                </div>
                <div className=''>
                  <img src={correct} alt="" />
                </div>
            </div>

            <div 
             className='flex bg-blue-600 rounded-lg mt-2 justify-between p-3'
             onClick={()=>setPreferencesOpen(!preferencesOpen)}
             >
                <div className='flex flex-col text-white gap-2'>
                    <p className='text-sm'>Preferences</p>
                    <p className='text-xs bg-blue-400 inline px-2 rounded-md w-[78px] text-center'>Progress</p>
                </div>
                <div className=''>
                  <img src={reload} alt="" />
                </div>
            </div>


            {preferencesOpen && 
            <div 
              className=' rounded-lg mt-2 justify-between p-3 border-blue-600 border'
         
              >
                <div className='flex flex-col border-b w-full pb-2'>
                    <p className='text-base'>Preferences</p>
                    <p className='text-xs text-gray-400'>Please enter you industry here and continue the process</p>
                </div>
                
                <div className='flex flex-col border-b w-full pb-2 pt-4'>
                    <p className='text-base'>Excluded Bank</p>
                    <div>
                    <FormControl sx={{ m: 1, width: 280 }}>
                        <InputLabel id="demo-multiple-chip-label">Banks</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip onDelete={handleDelete} key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </div>
                </div>
                <div className='flex flex-col border-b w-full pb-2 pt-4'>
                    <p className='text-base'>Preferred Bank</p>
                    <div>
                    <FormControl sx={{ m: 1, width: 280 }}>
                        <InputLabel id="demo-multiple-chip-label">Banks</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName2}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </div>
                </div>
                
                <div className='flex justify-around pt-4'>

                   <Button variant="contained" style={{width:'140px'}}>Continue</Button>
                   <Button variant="outlined" style={{width:'140px'}}>Cancel</Button>
                </div>
              
            </div>}
        
        </div>


    </div>
  )
}

export default MainList