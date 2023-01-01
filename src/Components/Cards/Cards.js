import React, {Fragment} from 'react';
import star from "../../Assets/Images/Star 1.png";

 const Cards = (props) => {
  let badgetext
   if (props.openSpots === 0){
    badgetext = "SOLD OUT"
   } else if (props.location === "Online" ){
    badgetext = "ONLINE"
   }
  //  console.log(badgetext);
  return (
<Fragment>

    <div className='card  text-[13px] leading-5 relative'>
    {badgetext && <div className='bg-white w-[60px] text-[12px] px-[1px] rounded-sm absolute top-5 left-2 font-semibold'>{badgetext}</div>}

<div className='w-[168px]' >
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
</Fragment>
  ) 
}

export default Cards;
