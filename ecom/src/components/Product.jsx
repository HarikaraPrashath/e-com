import React, { useState } from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";



function Product({item}) {
   
const [hoverEffects , setHoverEffects]=useState(' opacity-0')

const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  function handleHoverExit(){
    setHoverEffects(' opacity-0')
    }
  return (
   <div className='flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative'
    onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}
   >

    <img src={item.src} alt='Product image'/>
        <div className={`flex items-center justify-center  w-[100%] h-[100%]  absolute   ease-in duration-100`+ hoverEffects}>
            {/* icons */}
            <div className={iconStyle}>
            <PiShoppingCartLight />
            </div>

            <div className={iconStyle} >
            <GoHeart />
            </div>

            <div className={iconStyle}>
            <IoSearchOutline />
            </div>
        </div>
   </div>
  );
};


export default Product