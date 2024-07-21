import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

type ItemProps = {
    icon: string;
    title: string;
    description: string;
    price: string;
};

const Item = ({ icon, title, description, price }: ItemProps) => {
    return (
      <li className="flex flex-col items-center m-2 justify-center">
        <div className="flex flex-col justify-center mt-[1.5rem]">
            <Image src={icon} alt="item" width={250} height={250} style={{ width: 'auto', height: 'auto' }} />
            <h2 className="bold-20 text-[#424242] font-extrabold mt-2">
              {title}
            </h2>
            <p className="text-[#FFB30E] mt-1 flex gap-1 items-center">
            <FaLocationDot className="text-[#FFB30E]"/>
              {description}
            </p> 
            <p className="text-black font-bold mt-1">
              {price}
            </p> 
            <button className="bg-[#F17228] rounded-lg text-white h-[3rem]">Order Now</button>
        </div>
      </li>
    );
};

export default Item;
