// import Image from 'next/image';
// import React from 'react'
// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import { twMerge } from 'tailwind-merge';

// type Props = {
//     className?: string;
// }

// const FeatureSingleComponent = ({ className }: Props) => {
//   return (
//     <div className='w-full min-h-fit flex items-center justify-center'>
//         <div className={twMerge(`w-[80%] h-full py-[2rem] flex flex-col items-center justify-between gap-14 lg:gap-8`, className)}>
//             <div className={`w-full lg:flex-1 flex items-center justify-center ${className === "lg:flex-row" ? "lg:justify-start" : "lg:justify-end"}`}>
//                 <div className='relative w-fit h-full '>
//                     <Image 
//                         src={"/images/feature_1.jpg"}
//                         height={0}
//                         width={0}
//                         unoptimized
//                         alt='feature 1'
//                         className='relative h-[300px] w-[300px] md:w-[350px] md:h-[350px] xl:min-w-[450px] xl:min-h-[450px] object-fill z-20'
//                     />
//                      <div className='absolute max-w-[250px] min-h-[250px] md:max-w-[300px] md:min-h-[300px] xl:max-w-[350px] xl:min-h-[350px] bottom-[2.5rem] xl:bottom-[4.5rem] right-0 left-[1.25rem] xl:left-[2.5rem] bg-secondary-purple-dark rounded-3xl rotate-45 z-10'>
//                      </div>
//                 </div>
//             </div>
//             <div className='w-full lg:flex-1 flex flex-col items-start justify-center gap-4'>
//                 <p className='w-full text-start text-2xl text-neutral-200 capitalize font-semibold'> 
//                     Amazing visual editor
//                 </p>
//                 <p className='text-base text-neutral-500 text-wrap text-start line-clamp-4 xl:line-clamp-3 truncate'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est rerum, deleniti, unde commodi enim suscipit distinctio, eos beatae rem ex in delectus temporibus! Ea aliquid eius quam modi sed.
//                 </p>
//                 <div className='w-full flex flex-col items-start justify-center gap-2'>
//                     <div className='flex flex-row items-center justify-center gap-1'>
//                         <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
//                         <p className='text-neutral-400 font-normal text-base line-clamp-3 xl:line-clamp-2 truncate text-wrap'>
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
//                         </p>
//                     </div>
//                     <div className='flex flex-row items-center justify-center gap-1'>
//                         <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
//                         <p className='text-neutral-400 font-normal text-base line-clamp-3 xl:line-clamp-2 truncate text-wrap'>
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
//                         </p>
//                     </div>
//                     <div className='flex flex-row items-center justify-center gap-1'>
//                         <ArrowRightOutlinedIcon className='text-primary-pink' fontSize='large'/>
//                         <p className='text-neutral-400 font-normal text-base line-clamp-3 xl:line-clamp-2 truncate text-wrap'>
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, fuga.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FeatureSingleComponent