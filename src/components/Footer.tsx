import { FOOTER, ICON, MENU } from '@/constants';
import React from 'react';
import { FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#212121] p-8'>
            <div className='text-white border-b border-[#424242] pb-[3rem]'>
                <h2 className='font-bold text-xl mb-6 pt-[3rem]'>Our top cities</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                    {FOOTER.map((section) => (
                        <div  className='flex flex-col'>
                            {section.items.map((city) => (
                                <span  className='mb-2'>{city.name}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-white pt-[3rem] gap-4 flex flex-col md:flex-row border-b border-[#424242] pb-[3rem] justify-between'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
                    {MENU.map((section) => (
                        <div className='flex flex-col w-[200px]'>
                            <h3 className='font-bold mb-4'>{section.title}</h3>
                            {section.items.map((item) => (
                                <span  className='mb-2 text-sm'>{item.name}</span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='mt-8 md:mt-0'>
                    <h3 className='text-[#F5F5F5]'>Follow Us</h3>
                    <div className='flex space-x-4 gap-1 mt-2'>
                        {ICON.map((item, index) => (
                            <div key={index} className='flex items-center'>
                                <img src={item.icon} alt={`icon-${index}`} className='h-6' />
                            </div>
                        ))}
                    </div>
                    <p className='text-sm mt-5'>Receive exclusive offers in your mailbox</p>
                    <div className='relative mt-5 flex flex-col lg:flex-row sm:flex-col gap-2'>
                        <div className='relative w-full'>
                            <FaEnvelope className='absolute text-[#ADADAD] top-1/2 left-3 transform -translate-y-1/2' />
                            <input
                                placeholder='Enter Your email'
                                className='bg-[#424242] w-full h-[3rem] rounded-md pl-10'
                            />
                        </div>
                        <button className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white font-semibold py-2 px-6 rounded-md shadow-md w-full sm:w-auto h-[3rem]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-[#F5F5F5] mt-5 flex flex-col md:flex-row justify-between'>
                <div>
                    <p>All rights Reserved copyright Your Company, 2021</p>
                </div>
                <div className='flex justify-end mt-4 md:mt-0'>
                    <p className='flex items-center justify-center'>
                        Made with <FaHeart className='text-[#FDBC30] mx-2' /> by
                    </p>
                    <p className='font-extrabold'>Themewagon</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
