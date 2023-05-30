'use client'
import { useEffect, useState } from 'react'
import JobSeekerCard from './JobSeekerCard'
import { useFirestore } from '@/hooks/useFirestore'
import { JobSeeker } from '@/types/types.d.js'

export default function JobSeekersList () {
  const { getAllDocuments } = useFirestore()
  const [jobSeekerList, setJobSeekerList] = useState<JobSeeker[] | []>([])

  useEffect(() => {
    getAllDocuments('jobSeekerList')
      .then(all => setJobSeekerList(all as JobSeeker[]))
      .catch(err => console.log(err))
  }, [])

  if (jobSeekerList.length > 0) {
    return (
      <ul className='w-full flex flex-col gap-5'>
        {jobSeekerList.map(seeker => <JobSeekerCard data={seeker} key={seeker.uid} />)}
      </ul>
    )
  }

  return null
}
