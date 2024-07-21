import Image from 'next/image';

type SearchProps = {
  image: string;
  title: string;
};

const SearchItem = ({ image, title }: SearchProps) => {
  return (
    <li className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-full">
        <Image src={image} alt={title} width={130} height={150} style={{ width: 'auto', height: 'auto' }} className='rounded-full' />
        <h2 className="text-[#424242] font-extrabold mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center">
          {title}
        </h2>
      </div>
    </li>
  );
};

export default SearchItem;
