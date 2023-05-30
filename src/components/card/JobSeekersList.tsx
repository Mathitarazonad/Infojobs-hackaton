'use client'
import { JobSeeker } from '@/types/types'
import JobSeekerCard from './JobSeekerCard'
import { useDocuments } from '@/hooks/useDocuments'

export default function JobSeekersList () {
  const { documents: jobSeekerList } = useDocuments()

  if (jobSeekerList.length > 0) {
    return (
      <ul className='w-full flex flex-col gap-5'>
        {jobSeekerList.map(seeker => <JobSeekerCard data={seeker as JobSeeker} key={seeker.uid} />)}
      </ul>
    )
  }

  return null
}
