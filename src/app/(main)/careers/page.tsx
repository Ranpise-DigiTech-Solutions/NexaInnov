import React from 'react'
import ExploreCareersComponent from './_components/explore-careers'
import OurMissionComponent from './_components/our-mission'
import OpenPositionsComponent from './_components/open-positions'

type Props = {}

const CareersPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[6rem]'>
      <ExploreCareersComponent />
      <OurMissionComponent />
      <OpenPositionsComponent />
    </div>
  )
}

export default CareersPage