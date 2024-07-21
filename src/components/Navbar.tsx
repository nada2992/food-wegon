"use client";
import { useState } from 'react';
import { FaSearch, FaUser, FaEllipsisV } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='relative flex w-full items-center px-3 lg:px-6 xl:px-8 max-lg:py-4 justify-between h-[5rem] bg-white z-30'>
        <div className='flex items-center'>
          <img 
            src="/Logo.png"
            alt='logo'
            className="w-auto h-auto"
          />
        </div>

        {/* Menu button dropdown for small screens */}
        <div className='flex items-center gap-3 sm:hidden'>
          <button onClick={handleMenuToggle} className="text-[#FFB30E]">
            <FaEllipsisV />
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white shadow-lg border border-gray-200 z-50 flex flex-col">
              <div className='top-0 right-0 text-[#FFB30E] absolute text-3xl'>
                <RiCloseFill onClick={handleClose} />
              </div>
              <div className='flex flex-col flex-grow items-center justify-center gap-6'>
                <div className='text-[#FFB30E] flex items-center gap-3'>
                  <FaSearch className="" />
                  <h2 className="font-extrabold text-xl text-[#424242]">Search Food</h2>
                </div>
                <button className="text-[#FFB30E] flex gap-2 shadow-[#FFB30E] shadow-md border p-3 items-center justify-center rounded-lg font-extrabold h-10"> 
                  <FaUser /> Login
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Always visible on large screens */}
        <div className='hidden sm:flex items-center px-3 lg:px-6 xl:px-8 max-lg:py-4 gap-3'>
          <FaSearch className="text-[#FFB30E]" />
          <h2 className="font-extrabold text-xs sm:text-md text-[#424242]">Search Food</h2>
          <button className="text-[#FFB30E] flex gap-2 shadow-[#FFB30E] shadow-md border p-3 items-center justify-center rounded-lg font-extrabold h-10"> 
            <FaUser /> Login
          </button>
        </div>
      </nav>
      <div className=' bg-[#FFB30E] flex text-xs justify-center w-full items-center z-40'>
        <div className='flex flex-col sm:flex-row sm:p-4 items-start'>
          <h2 className="flex flex-col gap-2 font-bold text-[#424242]">
            Deliver to:
          </h2>
          <div className='flex flex-row pl-1'>
            <FaLocationDot className="text-white"/>
            <p className="text-white pl-1">Current Location</p>
            <h3 className="font-bold text-[#424242] pl-1">
              Mohammadpur Bus Stand, Dhaka
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
