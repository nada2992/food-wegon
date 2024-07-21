import { FOOD } from '@/constants';
import FoodItem from './FoodItem';

const Offer = () => {
  return (
    <section className='mt-[80px] flex items-center justify-center'>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {FOOD.map((food) => (
          <div 
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 flex justify-center'
          >
            <FoodItem
              image={food.image}
              price={food.price} 
              title={food.title}
              Days={food.Days}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offer;
