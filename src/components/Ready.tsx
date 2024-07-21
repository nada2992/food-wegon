import { IoIosArrowForward } from "react-icons/io";

const Ready = () => {
  return (
    <section className="flex relative">
      <img 
        src="/bg2.svg" 
        alt="background" 
        className="w-full h-full object-cover absolute top-0 left-0 z-0" 
      />
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative z-10 px-5 mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-pretty font-extrabold text-white sm:w-[32rem] md:w-[42rem] mt-[3rem] sm:mt-[4rem] md:mt-[5rem]">
            Are you ready to order with the best deals?
          </h2>
          <button className="bg-gradient-to-r from-[#F17228] to-[#F15E28] rounded-lg text-white flex items-center justify-center w-[15rem] sm:w-[11rem] md:w-[13rem] h-[2.5rem] sm:h-[2.75rem] md:h-[3rem] font-bold mt-[1.5rem] sm:mt-[1.75rem] md:mt-[2rem]">
            PROCEED TO ORDER <IoIosArrowForward className="font-bold text-lg sm:text-xl md:text-2xl ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ready;
