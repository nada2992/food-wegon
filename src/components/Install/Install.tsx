import { INSTALL } from '@/constants';
import React from 'react';
import Icons from './Icons';

const Install = () => {
  return (
    <section className='bg-[#FEEFD0] '>
      <div className=' flex justify-center'>
        <span className="flex flex-wrap bg-white p-4 rounded-[2rem] mt-[5rem] shadow-[#FEEFD0] shadow-md">
          {INSTALL.map((item) => (
              <Icons
                icon={item.icon}
                title={item.title}
              />
          ))}
        </span>
      </div>
        <div className='flex items-center justify-center px-5 lg:px-7.5 xl:px-10 max-lg:px-24 max-lg:py-4 mt-5 '>
          <img src="/Download.svg"
          alt='app'
          className='h-[10rem] sm:h-[50rem] md:h-[20rem]'
          />
        </div>
    </section>
  );
};

export default Install;
