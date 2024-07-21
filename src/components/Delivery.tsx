import { FaMotorcycle, FaSearch } from 'react-icons/fa';
import { FaBagShopping, FaLocationDot } from 'react-icons/fa6';

const Delivery = () => {
  return (
    <section className="bg-yellow-400 h-auto min-h-[32rem] flex items-end justify-start relative py-10">
      <div className='relative w-full h-full'>
        <div className='relative z-10 text-left px-5 lg:px-10 mb-10 mt-10'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4'>
            Are you starving?
          </h2>
          <p className='text-lg sm:text-xl text-[#424242] mb-8'>
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className='bg-white rounded-lg shadow-lg p-4 sm:p-8 inline-block w-full max-w-2xl'>
            <div className='flex flex-col sm:flex-row justify-start mb-4 gap-2'>
              <button className='px-4 h-[40px] flex items-center bg-orange-200 font-bold text-[#F17228] rounded-md gap-1'>
                 <FaMotorcycle />
                 Delivery
              </button>
              <button className='px-4 h-[40px] flex items-center bg-gray-100 font-bold text-gray-500 rounded-md gap-1'>
                <FaBagShopping />
                Pickup
              </button>
            </div>

            <div className='flex flex-col sm:flex-row gap-2'>
              <div className='relative flex-grow items-center justify-center'>
                <FaLocationDot className="absolute left-3 text-[#FF7474] items-center mt-3 text-lg" />
                <input 
                  type="text" 
                  placeholder="Enter Your Address" 
                  className='pl-10 py-2 rounded-md border bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full h-[3rem]' 
                />
              </div>
              <button className='px-4 flex items-center gap-1 bg-gradient-to-r from-[#FF7A7A] to-[#F65900] text-white rounded-md h-[3rem]'>
                <FaSearch />
                Find Food
              </button>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="/Image.png" 
        alt='image' 
        className='absolute w-full lg:w-auto h-auto max-h-[400px] object-contain bottom-1 right-0 z-10 hidden lg:block md:z-0' 
      />
    </section>
  );
};

export default Delivery;
