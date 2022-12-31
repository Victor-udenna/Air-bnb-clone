import React from 'react';
import logo from "../../Assets/Images/airbnb_logo.png";

const Navbar = () => {
  return (
    <nav className=' p-5 drop-shadow-2xl'>
      <div className='max-w-[100px]'>
        <img src={logo} alt="logo"/>
      </div>
    </nav>
  )
}
export default Navbar;
