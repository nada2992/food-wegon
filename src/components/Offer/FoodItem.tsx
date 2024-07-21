import Image from "next/image";

type FoodItem = {
  image: string;
  price: string;
  title: string;
  Days: string;
}

const FoodItem = ({ image, price, title, Days }: FoodItem) => {
  return (
    <li className="flex flex-1 flex-col gap-6">
      <div className="relative">
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={500} 
          className="rounded-xl" 
        />
         <div className="absolute bottom-0 left-0 bg-[#FFB30E] text-white w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:w-20 md:h-[3rem] lg:w-[6rem] lg:h-[3.5rem] xl:w-[7rem] xl:h-[4rem] rounded-tr-xl rounded-bl-xl flex items-center justify-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{price}</span>
          <div className="flex flex-col items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <span>%</span>
            <span>Off</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-[#424242] font-extrabold">
        {title}
      </h2>
      <button className="px-4 h-[40px] w-[13rem] flex items-center bg-orange-200 font-bold text-[#F17228] rounded-md gap-1">
        {Days}
      </button>
    </li>
  );
}

export default FoodItem;
