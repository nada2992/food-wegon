import { GUIDANCE } from '@/constants';
import Image from 'next/image';
import GuideItem from './GuideItem';

const Guidance = () => {
  return (
    <section className='bg-orange-50 w-full mt-[80px] items-center justify-center flex flex-col relative pb-4'>
      <div className="flexCenter gap-6 flex-col">
        <div className=''>
          <h2 className='text-[#F17228] font-extrabold text-center mt-[5rem] text-4xl'>How does it work</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {GUIDANCE.map((guide) => (
            <div 
              className="flex flex-col items-center sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5"
            >
              <GuideItem
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guidance;
