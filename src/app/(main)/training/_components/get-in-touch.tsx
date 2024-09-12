import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {}

const GetInTouchComponent = (props: Props) => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <div className='w-[90%] lg:w-[85%] h-full flex flex-col-reverse lg:flex-row items-center gap-16 justify-center'>
            <div className='w-full lg:w-[55%] flex flex-row items-center justify-center gap-12'>
              <div className='flex-1 flex flex-col items-center justify-center gap-12'>
                <div className='w-full min-h-[300px] lg:min-h-[350px] relative bg-white overflow-hidden rounded-2xl'>
                  <Image 
                    src={"/images/training-get-in-touch-1.jpg"}
                    alt='bg-1'
                    fill
                    objectFit='cover'
                    unoptimized
                    quality={100}
                    className=''
                  />
                </div>
                <div className='flex-1 w-full flex items-center justify-end'>
                  <div className='relative min-h-[200px] lg:min-h-[250px] w-[85%] rounded-2xl overflow-hidden'>
                    <Image 
                      src={"/images/training-get-in-touch-2.jpg"}
                      alt='bg-2'
                      fill
                      objectFit='cover'
                      unoptimized
                      quality={100}
                      className=''
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden'>
                <Image 
                  src={"/images/training-get-in-touch-3.jpg"}
                  alt='bg-3'
                  fill
                  objectFit='cover'
                  unoptimized
                  quality={100}
                  className=''
                />
              </div>
            </div>
            <div className='w-full lg:flex-1 flex flex-col items-center lg:items-start justify-center gap-12'>
              <p className='text-4xl lg:text-5xl text-center lg:text-start font-bold text-neutral-200 text-wrap capitalize'>
                learn easy <br /> <span className='gradient-text'>
                    anywhere anytime
                  </span> 
              </p>
              <p className='text-base font-normal text-neutral-400 text-wrap line-clamp-4 truncate text-center lg:text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste officiis id excepturi maxime cum sint ut quisquam, iusto recusandae. Illum alias ad magnam eos quis aspernatur error pariatur enim! Necessitatibus consequuntur iure aliquam, saepe, ad, molestiae vero itaque illo hic ullam architecto sequi quasi asperiores earum reiciendis voluptate deserunt!
              </p>
              <Button className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                    <p className="w-full gradient-border-inner text-base lg:text-lg tracking-wide text-neutral-200 px-4 py-2">
                      Get in touch
                    </p>
                  </Button>
            </div>
        </div>
    </div>
  )
}

export default GetInTouchComponent