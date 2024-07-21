import { SEARCH } from '@/constants';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SearchItem from './SearchItem';

const Search = () => {
  return (
    <section className='mt-[80px] w-full flex flex-col bg-[#FEFAF1] items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full px-4'>
        <div className='flex-grow text-center md:text-left'>
          <h2 className='text-black font-extrabold text-3xl md:text-4xl mt-12 md:mt-20'>
            Search by Food
          </h2>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-end mt-8 md:mt-20'>
          <button className='text-[#FFBA26] flex items-center justify-center w-full md:w-36 rounded-lg font-extrabold h-12 md:h-10 mb-4 md:mb-0'>
            view all
            <IoIosArrowForward className='' />
          </button>
          <div className='flex gap-2 mt-4 md:mt-0'>
            <button className='bg-[#FFBA26] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl md:text-2xl'>
              <IoIosArrowBack />
            </button>
            <button className='bg-[#FFBA26] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl md:text-2xl'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className='mt-8 px-4'>
        <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12'>
          {SEARCH.map((search) => (
            <SearchItem
              image={search.image}
              title={search.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Search;
