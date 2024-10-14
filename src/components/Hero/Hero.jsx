import React from 'react'
import mountain from "../../assets/moon-surface-hd.png"

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50 pt-20'>
      <div className="h-full flex justify-center ite p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36 pt-24'>
                <h1  data-aos="fade-up" className='text-5xl font-bold uppercase' > 
                    Orbite The Earth
                </h1>
                <p  data-aos="fade-up" data-aos-delay="300">
                Earth revolves in orbit around the Sun in 365 days, 6 hours, 9 minutes with reference to the stars, at a speed ranging from 29.29 to 30.29 km/s. The 6 hours, 9 minutes adds up to about an extra day every fourth year, which is designated a leap year, with the extra day added as February 29th
                </p>
                <button data-aos="fade-up" data-aos-delay="500" className="primary-button"> Learn More</button>
            </div>
        </div>
      </div>

      <img src={mountain} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10'/>
      <div className='absolute bottom-0 w-full  z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
       
    </div>
  )
}

export default Hero
