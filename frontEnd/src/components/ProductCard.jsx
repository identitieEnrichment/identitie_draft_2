import React, { useEffect, useRef } from 'react'
import StarIcon from './StarIcon';
import { truncateText } from '../utils/truncuateText';

const ProductCard = () => {
    const paragraphRef = useRef(null);
    const renderStarts = (count)=>{
        const stars = [];
        for(let i=0; i<count ; i++){
            stars.push(<StarIcon key={i} />);
        }
        return stars
    }

  useEffect(() => {
    if (paragraphRef.current) {
      truncateText(paragraphRef.current, 3); // Number of lines to show
    }
  }, []);
  return (
    <div>
      <div className='w-full   h-48 md:h-96 p-4 md:block md:space-x-0   flex space-x-4 items-center justify-center rounded-lg bg-[#161b22] '>  {/* Single*/}
            <div className='w-6/12 md:w-full md:h-48 h-full bg-white rounded-lg  object-cover'>
                <img className='w-full h-full object-cover' src='../assets/chips.webp'></img>
            </div>
            <div className='w-8/12 md:w-full md:py-2  text-white flex flex-col justify-between h-full md:h-fit'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-bold '>Kerala Chips</h1>
                        <span className='text-xl md:text-base font-bold  hidden md:block'>₹199</span>
                    </div>
                  
                    <div className='flex md:mb-3'>{renderStarts(5)}</div>
                    <p ref={paragraphRef} className='text-sm mt-2 md:mt-0 text-slate-300 '>This is a delecious food that can served in pary,wedcing and all  rved in pary,wedcing and all </p>
                </div>
                <div className='flex md:block md:mt-2 md:space-y-2 items-center justify-between'>
                    <span className='text-xl md:text-base font-bold md:my-10 md:hidden'>₹199</span>
                    <button className='px-5 py-2 bg-[#feb043] md:w-full rounded-lg text-black font-medium '>Buy Now</button>
                </div>
            </div>
       </div>

    </div>
  )
}

export default ProductCard
