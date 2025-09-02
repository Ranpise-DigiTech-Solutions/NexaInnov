import React from 'react'
import FeaturesListComponent from './_components/features-list'
//import FeatureSingleComponent from './_components/feature-single'

type Props = {}

const FeaturesPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[5rem]'>
        <FeaturesListComponent />
        {/* <FeatureSingleComponent className='lg:flex-row'/> */}
        {/* <FeatureSingleComponent className='lg:flex-row-reverse'/> */}
        {/* <FeatureSingleComponent className='lg:flex-row'/> */}
        {/* <FeatureSingleComponent className='lg:flex-row-reverse'/> */}
    </div>
  )
}

export default FeaturesPage