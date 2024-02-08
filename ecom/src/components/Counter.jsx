import React from 'react'


function counter() {
  return (
    <div>
        <div className='flex items-center justify-center text-2xl'>
                Quantity
               <div className='ml-5 shadow-md flex '>
               <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md '>
                   - 
                </div>
                <div className='w-8 flex items-center justify-center border-[#8a4af3] border-[1px]'>
                    1
                </div>
                <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md '>
                    +
                </div>
               </div>
        </div>
    </div>
  )
}

export default counter