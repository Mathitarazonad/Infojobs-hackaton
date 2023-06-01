'use client'
import { JobSeeker } from '@/types/types'
import JobSeekerCard from './JobSeekerCard'
import { useDocuments } from '@/hooks/useDocuments'
import MyLoader from './LoaderCard'

export default function JobSeekersList () {
  const { documents: jobSeekerList, loadingDocuments } = useDocuments()

  if (loadingDocuments) {
    return (
      <ul className='max-w-full flex flex-col gap-5'>
        <MyLoader />
        <MyLoader />
        <MyLoader />
      </ul>
    )
  }

  if (jobSeekerList.length > 0) {
    return (
      <ul className='w-full flex flex-col gap-5'>
        {jobSeekerList.map(seeker => <JobSeekerCard data={seeker as JobSeeker} key={seeker.uid} />)}
      </ul>
    )
  }

  return (
    <div className='min-h-[200px] flex justify-center items-center w-full'>
      <h2 className='text-2xl font-semibold text-gray-950 bg-white drop-shadow-lg rounded-lg p-14 md:p-20 text-center'>No results found</h2>
    </div>
  )
}
