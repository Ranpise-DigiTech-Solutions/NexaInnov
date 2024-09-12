import Image from 'next/image'
import React from 'react'

type Props = {}

const ExploreCareersComponent = (props: Props) => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center gap-[4rem]'>
        <div className='min-h-[300px] w-full flex items-center justify-center bg-neutral-700'>
            <div className='h-[90%] w-[85%] flex flex-col items-center justify-center gap-6'>
                <p className='capitalize text-4xl lg:text-5xl text-neutral-200 font-bold text-nowrap text-center leading-12'>
                    Explore Exciting Career
                    <br/> <span className='gradient-text'>Opportunities with us</span>
                </p>
                <p className='w-[85%] lg:w-[60%] text-wrap line-clamp-3 lg:line-clamp-2 text-sm lg:text-base leading-7 font-normal text-neutral-400 text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem iusto saepe dolorum delectus quidem ullam aspernatur maxime rerum totam! Ipsaobcaecati sit?
                </p>
            </div>
        </div>
        <div className='flex-1 w-[90%] lg:w-[85%] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8'>
            <div className='flex-1'>
                <Image 
                    src={"/images/careers-interview.jpeg"}
                    alt='Careers Interview'
                    width={0}
                    height={0}
                    className='min-h-[350px] min-w-[450px] md:min-w-[500px] lg:min-w-[550px] rounded-2xl object-cover'
                    unoptimized
                    quality={100}
                />
            </div>
            <div className='flex-1'>
                <div className='flex flex-col items-center lg:items-start justify-center gap-4'>
                    <p className='text-wrap text-4xl lg:text-5xl text-neutral-200 font-bold capitalize text-center lg:text-start'>
                        Diversity, equity & Inclusion
                    </p>
                    <div className='text-wrap text-neutral-400 text-center lg:text-start text-base font-normal flex flex-col items-start justify-center gap-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus magni facere veniam asperiores vitae, autem quis accusamus excepturi cupiditate quod modi quae omnis deserunt neque? Quos iste ad minus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus magni facere veniam asperiores vitae, autem quis accusamus excepturi cupiditate quod modi quae omnis deserunt neque? Quos iste ad minus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExploreCareersComponent