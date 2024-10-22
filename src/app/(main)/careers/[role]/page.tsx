import { ArrowLeft } from 'lucide-react';
import React from 'react'

type Props = {
  params: {
    role: string;
  }
}

const CareersSingle = ({ params } : Props) => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center pt-8'>
      <div className='w-[90%] lg:w-[80%] h-full flex flex-col items-center justify-center gap-6'>
        <div className='group w-full flex items-center justify-start gap-2 cursor-pointer'>
          <ArrowLeft className='text-neutral-300 transform transition-all duration-300 group-hover:text-primary-pink' />
          <span className='text-neutral-300 transform transition-all duration-300 group-hover:text-primary-pink'>Back to all jobs</span>
        </div>
        <div className='w-full p-[1rem] flex flex-col items-center justify-center bg-neutral-700 min-h-screen'>
          <div className='w-full flex items-center justify-between gap-4'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersSingle