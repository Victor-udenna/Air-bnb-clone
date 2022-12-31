import React from 'react';
import star from "../../Assets/Images/Star 1.png";

 const Cards = (props) => {
  return (
    <div className='card  text-[13px] leading-5'>
<div className='w-[140px]' >
<div className='py-3'>
  <img src={props.image} alt="image" className="h-[220px] w-[100%] rounded-lg"/>
</div>
<div className='flex gap-1 items-center py-1'>
<img src={star} alt="img" className='h-[14px] w-[14px]'/>
<span>{props.rating}</span>
<span className='text-[#918E9B]'>({props.reviewCount}) . </span>
<span className='text-[#918E9B]'>{props.location}</span>
</div>
<p className=''>
{props.title}
</p>
<p className=''>
<span className='font-bold'>From ${props.price}</span> / person
</p>
</div>
    </div>
  ) 
}

export default Cards;
