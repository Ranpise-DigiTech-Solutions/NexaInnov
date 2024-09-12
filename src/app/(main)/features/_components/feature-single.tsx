import Image from 'next/image';
import React from 'react'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
}

const FeatureSingleComponent = ({ className }: Props) => {
  return (
    <div className='w-full min-h-fit flex items-center justify-center'>
        <div className={twMerge(`w-[80%] h-full py-[2rem] flex items-center justify-between gap-8`, className)}>
            <div className='relative flex-1 h-full'>
                <div className='max-w-[350px] min-h-[350px] bg-secondary-purple-dark rounded-3xl rotate-45'>
                </div>
                <Image 
                    src={"/images/feature_1.jpg"}
                    height={0}
                    width={0}
                    unoptimized
                    alt='feature 1'
                    className='absolute min-w-[450px] min-h-[450px] -top-[2rem] right-0 -left-[2.5rem] bottom-0 object-fill'
                />
            </div>
            <div className='flex-1 flex flex-col items-start justify-center gap-4'>
                <p className='text-2xl text-neutral-200 capitalize font-semibold'> 
                    Amazing visual editor
                </p>
                <p className='text-base text-neutral-500 text-wrap text-start line-clamp-3 truncate'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est rerum, deleniti, unde commodi enim suscipit distinctio, eos beatae rem ex in delectus temporibus! Ea aliquid eius quam modi sed.
                </p>
                <div className='w-full flex flex-col items-start justify-center gap-2'>
                    <div className='flex flex-row items-center justify-center gap-1'>
                        <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
                        <p className='text-neutral-400 font-normal text-base line-clamp-1 truncate'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-1'>
                        <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
                        <p className='text-neutral-400 font-normal text-base line-clamp-1 truncate'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-1'>
                        <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
                        <p className='text-neutral-400 font-normal text-base line-clamp-1 truncate'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSingleComponent