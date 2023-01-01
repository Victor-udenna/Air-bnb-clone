import React, {Fragment} from 'react';

import './App.css';
import { Navbar } from "./Components";
import { Hero } from "./Components";
import { Cards } from "./Components";
import { data } from './data';
// import cardimg from  "./Assets/Images/cardimg1.png";

function App() {

  return (
<Fragment>
<div className="App ">
 <Navbar/>
 <Hero/>
 <div className='p-5 grid grid-cols-3 gap-[12rem] overflow-x-scroll'>

{
   data.map((items)=>{
    return (
      <Cards
      key={items.id}
      image={items.coverImg}
      rating={items.stats.rating}
      reviewCount = {items.stats.reviewCount}
      location = {items.location}
      price= {items.price}
      title={items.title}
      openSpots={items.openSpots}
      /> 
    )
    })
}
  {/* {card} */}
</div>
</div>
<div className='screen_size hidden text-5xl font-bold'>
<h1>This is only available for mobile devices  <span className='text-blue-300'>:-)</span></h1>
</div>
</Fragment>

    
  );
}

export default App;
