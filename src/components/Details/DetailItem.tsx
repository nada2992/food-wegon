import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

type Detail = {
  icon: string;
  title: string;
  description: string;
  place: boolean;
  highlightText: string;
};

const DetailItem = ({ icon, title, description, place, highlightText }: Detail) => {
  return (
    <li className="flex flex-col items-center w-full">
      <div
        className={`flex items-center text-center justify-center mt-12 mx-4 ${place ? 'md:flex-row-reverse flex-col' : 'flex-col md:flex-row'}`}
      >
        <Image 
          src={icon} 
          alt="map" 
          width={700} 
          height={700} 
          className="w-full sm:w-[22rem] md:w-[22rem] md:h-[22rem] lg:w-[38rem] object-cover" 
        />
        <div className="flex flex-col pb-[48px] items-center justify-center shadow-2xl h-auto sm:w-[22rem] md:w-[22rem] md:h-[22rem] lg:w-[38rem] w-full mt-4 md:mt-0 p-4">
          <h2 className="text-[#353535] font-extrabold mt-6 text-2xl md:text-3xl">
            {title}
            <p className="text-[#FFB30E] font-extrabold text-xl md:text-2xl lg:text-3xl">{highlightText}</p>
          </h2>
          <p className="text-[#616161] text-sm md:text-md mt-2">{description}</p>
          <div className="flex items-center justify-center md:justify-start mt-[2rem] md:mt-[5rem] ">
            <button className="bg-[#FF8A00] shadow-[#FF8A00] shadow-md rounded-lg text-white flex items-center justify-center w-[13rem] md:w-[15rem] lg:w-[20rem] h-[3rem] uppercase text-sm md:text-base lg:text-lg">
              Proceed to order <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DetailItem;
