import React from 'react'
import GetStartedComponent from './_components/get-started'
import FactNumbersComponent from './_components/fact-numbers'
import TrainingFeaturesComponent from './_components/training-features'
import CourseListComponent from './_components/course-list'
import GetInTouchComponent from './_components/get-in-touch'

type Props = {}

const TrainingPage = (props: Props) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-[4rem]'>
        <GetStartedComponent />
        <FactNumbersComponent />
        <TrainingFeaturesComponent />
        <CourseListComponent />
        <GetInTouchComponent />
    </div>
  )
}

export default TrainingPage