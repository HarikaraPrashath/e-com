import React from 'react'
import { IoSearch } from "react-icons/io5";
import { ImCart } from "react-icons/im";

function Navbar() {
  const style = 'text[14px],cursor-pointer,ml-[25px],mobile:ml-[5px]';
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'> 

{/* left div */}
        <div className='left flex flex-1 items-center'>
           <div  className='language cursor-pointer text-[16px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px]'>En</div>
             <div className='SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]'>
             <input  className='input border-none mobile:w-[50px]' type='text'   />
             <IoSearch className="text-[#8a4af3] m" style={{fontSize: '16px'}}/>
             </div>
        </div>

{/* logo */}
        <div className='center flex-1 text-center '>
          <div  className='logo font-bold text-lg'>
            Summer Kings
          </div>
        </div>
{/* right div */}
        <div className='right flex fel'>
          <button className='text[14px] cursor-pointer ml-[25px] mobile:ml-[5px]'>Register</button>
          <button className='text[14px] cursor-pointer ml-[25px] mobile:ml-[5px]'>Sign in</button>
          <div className='text[14px] cursor-pointer ml-[25px] mobile:ml-[5px] mt-[7px]'>
          <div >
          <ImCart/>
          </div>
          </div>
         
          
        </div>
        </div>

    </div>
  )
}

export default Navbar