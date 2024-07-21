import { FEATURES } from '@/constants'
import React from 'react'
import Restaurants from './Restaurants'
import { IoIosArrowForward } from 'react-icons/io'

const FeaturedRestaurants = () => {
  return (
    <section className='bg-white mt-20 px-4'>
      <div className='text-center'>
        <h2 className='text-black font-extrabold mt-20 text-4xl sm:text-5xl'>
          Featured Restaurants
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-2xl items-center justify-center mt-10'>
        {FEATURES.map((item) => (
          <Restaurants
            icon={item.icon}
            logo={item.logo}
            title={item.title}
            open={item.open}
            rate={item.rate}
            price={item.price}
            delivery={item.delivery}
          />
        ))}
      </div>
      <div className='flex items-center justify-center mt-20'>
        <button className='bg-yellow-400 flex items-center justify-center w-32 rounded-lg text-white h-12'>
          view all
          <IoIosArrowForward className='' />
        </button>
      </div>
    </section>
  )
}

export default FeaturedRestaurants
