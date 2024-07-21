import React from 'react';
import Item from './Item';
import { ITEMS } from '@/constants';

const Items = () => {
  return (
    <section className='bg-white mt-20 px-4'>
      <div className='text-center'>
        <h2 className='text-black font-extrabold text-center mt-20 text-4xl'>
          Popular items
        </h2>
      </div>
      <div className='mt-10 flex flex-wrap justify-center gap-6'>
        {ITEMS.map((item) => (
          <div
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/6 flex justify-center'
          >
            <Item
              icon={item.icon}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Items;
