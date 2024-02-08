import React from 'react'
import { TiSocialFacebook,TiSocialPinterest,TiSocialInstagram,TiSocialLinkedin} from "react-icons/ti";
import { IoLocation,IoCall,IoMail } from "react-icons/io5";

function Footer() {

    const iconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='flex items-center justify-around p-2'>
        <div className='flex-1 flex flex-col flex-wrap p-2'> 
            {/* store information */}
            <h1 className='text-[25px] '>
                ZainKeepCode
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
          repellendus dignissimos iure itaque architecto pariatur quia a eveniet
          veniam?
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={iconStyle + '  bg-blue-700'}>
                    <TiSocialFacebook/>
                </div>
                <div className={iconStyle + '  bg-red-600'}>
                    <TiSocialPinterest/>
                </div>
                <div className={iconStyle + '  bg-orange-500'}>
                    <TiSocialInstagram/>
                </div>
                <div className={iconStyle + '  bg-sky-400'}>
                    <TiSocialLinkedin/>
                </div>
            </div>
        </div>
        <div className='flex flex-1 flex-col p-2'>
            <div className='flex m-3'>
                <IoLocation/>
                <p className='pl-3'>
                    State of Califormia
                </p>
            </div>   
            <div className='flex m-3'>
                <IoCall/>
                <p className='pl-3'>
                    +94 788840339
                </p>
            </div>   
            <div className='flex m-3'>
                <IoMail/>
                <p className='pl-3'>
                    prashathhari@2002@gmail.com
                </p>
            </div>   
        </div>
    </div>
  )
}

export default Footer