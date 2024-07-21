import Image from "next/image";

type GuideItem = {
    icon: string;
    title: string;
    description: string;
  }
const GuideItem = ({ icon, title, description }: GuideItem) => {
    return (
      <li className="flex flex-1 flex-col items-center flexCenter ">
        <div className="flex flex-col items-center text-center justify-center">
            <Image src={icon} alt="map" width={150} height={150} style={{ width: 'auto', height: 'auto' }} className="items-center justify-center" />
            <h2 className="text-[#424242] items-center justify-center font-extrabold ">
            {title}
            </h2>
            <p className="text-gray-500 ">
            {description}
            </p> 
        </div>
      </li>
    )
  }

export default GuideItem;
