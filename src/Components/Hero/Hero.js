import React from 'react';
import hero_img from "../../Assets/Images/Hero_img.png";

 const Hero = () => {
  return (
   <section className='flex flex-col gap-6 py-10'>
    <div className='max-w-[400px]'>
        <img src={hero_img} alt="hero_img"/>
    </div>
    <div className='text-sm'>
        <h1 className='text-[36px] font-bold my-7'>Online Experiences</h1>
        <p className='text-[16px] leading-7'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div>
   </section>
  )
}

export default Hero;
