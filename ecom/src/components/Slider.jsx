import React, { useState } from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import{ApiSlides} from '../componentsApi/SliderApi'
import'./Slider.css'



function Slider() {
    //useState hooks
    const[slides] = useState(ApiSlides)
    const [activesSlides,setActivesSlides] = useState(0)

    //style
    const arrowStyle = " rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

    //nextSlide
    const nextSlide=()=>{
        if(activesSlides === slides.length-1){
            setActivesSlides(0)
        }

        else{
            setActivesSlides(activesSlides+1)
        }

    }

    //pre slide
    const preSlide =()=>{
        if(activesSlides === 0){
            setActivesSlides(slides.length - 1)
        }

        else{
            setActivesSlides(activesSlides - 1)
        }
    }

  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
        {/* left arrow */}
        <div className={arrowStyle}>
        <FaChevronLeft style={{fontSize:'50px'}} onClick={preSlide}/>
        </div>





        {/* slide div */}
     {slides.map((slide, index)=>{
        if(index === activesSlides){
            return(
                <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative `+slide.background}>
                <div className='slide flex items-center justify-center h-[100%]'>
                    <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                      <img className='h-[100%] object-cover' 
                      src={slide.src}
                      alt = 'slide image'/>
                    </div>
                    <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
                        <h2 className='text-[55px]'>{slide.content.h2}</h2>
                        <p className='text-[30px]'>{slide.content.p}</p>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            )
        }
     })}







        {/* right arrow */}
        <div className={arrowStyle}>
            <FaChevronRight style={{fontSize:'50px'}} onClick={nextSlide}/>
        </div>

    </div>
  )
}

export default Slider