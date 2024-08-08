import React from 'react'


const StarIcon = ()=> (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="#FFC107"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
)

const TestimonialsCard = ({data}) => {
    const renderStarts = (count)=>{
        const stars = [];
        for(let i=0; i<count ; i++){
            stars.push(<StarIcon key={i} />);
        }
        return stars
    }
  return (
    <div>
        <blockquote className='shadow-lg rounded-md w-full lg:w-96 bg-transparent'>
            <div className='flex items-center   space-x-4'>
                <img
                  alt=""
                  src="./assets/review.png"
                  class="size-16 rounded-md  object-cover"
                />
                <div className='space-y-1'>
                    <h1 className='lg:text-xl font-bold capitalize font-poppins text-white text-sm'>{data?.name}</h1>
                    <p className='text-[#666666] lg:text-sm text-xs font-poppins'>{data?.title}</p>
                    <div className='flex'>
                         {renderStarts(5)}
                    </div>
                    
                </div>
            </div>
            <div className='p-2   text-xs  text-[#666666] font-poppins'>
               {data?.review}
            </div>
        </blockquote>
    </div>
  )
}

export default TestimonialsCard
