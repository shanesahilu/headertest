import React from 'react'
import Logo from "./img/logo2.png"
import {HiOutlineShoppingCart} from "react-icons/hi";
const Header = () => {
  return (
  <header className="fixed z-50 w-screen p-3 px-12">
  <div className="hidden md:flex w-full h-full">
  <div className='flex items-center gap-2'>
    <img src={Logo} className="w-28 object-cover" alt="logo"/>
    <p className='text-headingColor text-xl fond-bold'>DIGITAL CANTEEN</p>
    </div>
    <ul className='flex items-center gap-8 ml-auto'>
        <li className='text-base text-headingColor hover:text-headingColor duration -120 trasition-all ease-in-out cursor-pointer'>Home</li>
        <li className='text-base text-headingColor hover:text-headingColor duration -120 trasition-all ease-in-out cursor-pointer'>Menu</li>
        <li className='text-base text-headingColor hover:text-headingColor duration -120 trasition-all ease-in-out cursor-pointer'>About Us</li>
    </ul>
    <div className='relative flex items-center justify-center'>
      <HiOutlineShoppingCart className="text-textColor text-2xl ml-9 cursor-pointer" />
      <div className=" absolute top-8 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
        <p className='text-xs text-white font-semibold'>2</p>
      </div>
    </div>
  </div>
  <div className='flex md:hidden w-full h-full'></div>

  </header>
  );
};

export default Header;