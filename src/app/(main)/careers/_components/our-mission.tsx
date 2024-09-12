import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';

type Props = {}

const OurMissionComponent = (props: Props) => {
  return (
    <div className='min-h-fit w-full flex items-center justify-center'>
        <div className='w-[90%] lg:w-[85%] h-full flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-center text-4xl lg:text-5xl font-bold text-wrap text-neutral-200'>
                    Interested in our <br/> mission ?
                </p>
                <p className='w-[75%] lg:w-[55%] text-neutral-500 text-sm lg:text-base leading-6 lg:leading-7 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate placeat necessitatibus qui quos, magni similique atque facilis omnis asperiores?
                </p>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8'>
                <div className='flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4'>
                    <PeopleAltIcon fontSize='medium' className='w-full text-primary-pink' />
                    <p className='text-neutral-200 font-bold text-xl'>We put people first</p>
                    <p className='text-neutral-400 font-normal text-base line-clamp-2 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse, ipsam iusto officiis et veniam modi minus cupiditate vel assumenda.</p>
                </div>
                <div className='flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4'>
                    <RocketLaunchIcon fontSize='medium' className='w-full text-primary-pink' />
                    <p className='text-neutral-200 font-bold text-xl'>We&apos;re always growing</p>
                    <p className='text-neutral-400 font-normal text-base line-clamp-2 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse, ipsam iusto officiis et veniam modi minus cupiditate vel assumenda.</p>
                </div>
                <div className='flex-1 min-h-[200px] flex flex-col items-stretch justify-center gap-4 bg-neutral-800 rounded-2xl text-center p-4'>
                    <PublicIcon fontSize='medium' className='w-full text-primary-pink' />
                    <p className='text-neutral-200 font-bold text-xl'>We&apos;re accessible</p>
                    <p className='text-neutral-400 font-normal text-base line-clamp-2 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse, ipsam iusto officiis et veniam modi minus cupiditate vel assumenda.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurMissionComponent