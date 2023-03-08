import Image from "next/image.js";
import React, {useState} from "react";
import { SliderData } from "./SliderData.js";
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'

const Slider = ({slides}) => {
const [current, setCurrent] = useState(0);
const lenght = slides.lenght

const nextSlide = () => {
  setCurrent(current == lenght - 1 ? 0 : current + 1)
}
const prevSlide = () => {
  setCurrent(current === 0 ? lenght - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <=0 )
{
  return null;
}

    return (
        <div id="gallery" className="max-w-[1240px] mx-auto">
            <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
            
              {SliderData.map((slide, index) => {
                return (
                  <div key={index} className={index===current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0' }> 
                    <div className="relative flex justify-center p-4">
                   <FaArrowCircleLeft onClick={prevSlide} className="absolute top-[50%] left-[110px] text-white/70 cursor-pointer select-none z-[2]" size={50} />
                   
                    {index === current && (
                      <Image src={slide.image} alt='/' width='1040' height='400' objectFit='cover' />
                    )}
                    <FaArrowCircleRight onClick={nextSlide} className="absolute top-[50%] right-[110px] text-white/70 cursor-pointer select-none z-[2]" size={50} />
                    </div>
                    </div>
                )
              })}
        </div>
    );
};
export default Slider