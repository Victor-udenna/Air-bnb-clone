import './App.css';
import { Navbar } from "./Components";
import { Hero } from "./Components";
import { Cards } from "./Components";
import { data } from './data';
// import cardimg from  "./Assets/Images/cardimg1.png";

function App() {

  return (
    <div className="App">
 <Navbar/>
 <Hero/>
 <div className='grid grid-cols-3 gap-40 overflow-x-scroll'>

{
   data.map((items)=>{
    return (
      <Cards
      image={items.coverImg}
      rating={items.stats.rating}
      reviewCount = {items.stats.reviewCount}
      location = {items.location}
      price= {items.price}
      title={items.title}
      /> 
    )
    })
}
  {/* {card} */}
</div>
</div>

    
  );
}

export default App;
