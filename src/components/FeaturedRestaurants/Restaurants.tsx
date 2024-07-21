import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled, MdLocalOffer } from 'react-icons/md';

type Feature = {
    icon: string;
    title: string;
    logo: string;
    rate: string;
    open: boolean;
    price: string;
    delivery: string;
};
const Restaurants = ({ icon, title, open , logo, rate, price, delivery}: Feature) => {
    return (
        <li className="flex flex-col items-center justify-center">
          <div className=" flex-col justify-center mt-[1.5rem] rounded-2xl ">
            <div className="absolute text-white m-2 flex "> 
              <span className=" m-2 font-extrabold h-[2rem] w-[6rem] gap-2 items-center justify-center bg-[#F17228] flex rounded-md"> <MdLocalOffer />{price}</span>
              <span className=" m-2 w-[4rem] font-extrabold bg-[#FFB30E] gap-1 items-center justify-center flex rounded-md">
                <MdAccessTimeFilled />
                {delivery}
              </span>
          </div>
              <Image src={icon} alt="item" width={310} height={190} style={{ width: 'auto', height: 'auto' }}  className='rounded-xl items-center justify-center' />

              <div className='flex flex-col gap-1 mt-4'>
                <div className='flex gap-2'>
                <Image src={logo} alt="item" width={50} height={50} />
                <div className='flex-col flex'>
                  <h2 className="bold-20 text-[#424242] font-extrabold mt-2">
                    {title}
                  </h2>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-[#FFB30E]' />
                    <p className='text-[#FFB30E]'>{rate}</p>
                  </div>
                </div>
                </div>
                <div className='mt-4'>
                  <button className={`px-4 py-2 rounded-xl text-white font-bold ${open ? 'bg-[#c8e5ad] text-green-800' : 'bg-orange-200 text-[#f57835] '}`}>
                    {open ? 'Open Now' : 'Opens Tomorrow'}
                  </button>
                </div>
              </div>
              
          </div>
        </li>
      );
  };

export default Restaurants
