
import { FaSuitcase } from 'react-icons/fa/'
import { BiTime } from 'react-icons/bi/'
import { IoLocationSharp } from 'react-icons/io5/'
import { BsBookmark } from 'react-icons/bs/'
import { JobSeeker } from '@/types/types.d.js'
import JobSeekerStatus from './JobSeekerStatus'
import CardImage from './CardImage'

export default function JobSeekerCard ({ data }: { data: JobSeeker }) {
  const { fullname, photoURL, city, jobModality, description, status, role, workday, desiredContract } = data

  return (
    <article className='drop-shadow-lg w-full min-w-[300px] bg-white p-2 md:p-4 lg:p-6 flex gap-3 rounded-lg'>
      <CardImage src={photoURL} />
      <div className='flex flex-col gap-1 md:gap-[6px] w-full'>
        <div className='flex justify-between items-center'>
          <section className='flex gap-2 md:gap-4'>
            <JobSeekerStatus status={status} />
            <p className='bg-sky-600 text-center p-1 w-[100px] text-white font-medium rounded-lg'>{jobModality}</p>
          </section>
          <section className='hover:scale-105 cursor-pointer'>
            <BsBookmark className='h-full text-gray-400 text-2xl' strokeWidth={1.1} />
          </section>
        </div>
        <h5 className='font-bold text-lg'>{fullname}</h5>
        <h6 className='font-semibold text-gray-900'>{role}</h6>
        <div className='flex justify-between items-center gap-1 text-sm text-neutral-900 max-w-[300px]'>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <FaSuitcase className='mb-[3px]' />
            {desiredContract}
          </div>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <BiTime className='mb-[2px]' />
            {workday}
          </div>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <IoLocationSharp className='mb-[2px]' />
            {city}
          </div>
        </div>
        <p className='text-sm text-gray-600 line-clamp-2 md:line-clamp-3 lg:line-clamp-4'>{description} </p>
      </div>
    </article>
  )
}
