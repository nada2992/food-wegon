import Image from 'next/image';
import React from 'react'

type install ={
    icon: string,
    title: string,
};

const Icons = ({icon, title}: install) => {
  return (
    <li className="flex flex-1 flex-col items-center">
        <div className="flex flex-col md:w-80 items-center text-center justify-center mt-[3rem] m-5">
            <Image src={icon} alt="map" width={100} height={100} />
            <h2 className="font-extrabold text-3xl bg-gradient-to-r from-[#FB3C00] via-[#FB3C00] to-[#FFB800] inline-block text-transparent bg-clip-text mt-4 sm:mt-6">
              {title}
            </h2>

        </div>
    </li>
  )
}

export default Icons
