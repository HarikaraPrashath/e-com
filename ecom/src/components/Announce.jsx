import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function Announce() {
 const [announceStyle,setAnnounceStyle] = useState ('bg-purple-600 font-bold text-white flex items-center justify-center')
 const  handleClose=()=>{
   setAnnounceStyle(announceStyle+" hidden")
 }
 return (
    <div className={announceStyle}>
        <h2>Hurry up its 40% off now</h2>
        <IoIosCloseCircleOutline className='cursor-pointer ml-3 mt-1' onClick={handleClose} />
    </div>
  )
}

export default Announce