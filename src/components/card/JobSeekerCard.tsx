
import { FaSuitcase } from 'react-icons/fa/'
import { BiTime } from 'react-icons/bi/'
import { IoLocationSharp } from 'react-icons/io5/'
import { BsBookmark } from 'react-icons/bs/'

export default function JobSeekerCard () {
  return (
    <article className='drop-shadow-lg w-full min-w-[300px] bg-white p-2 md:p-4 lg:p-6 flex gap-3 rounded-lg'>
      <span className='rounded-full min-w-[45px] h-[45px] md:min-w-[55px] md:h-[55px] lg:min-w-[65px] lg:h-[65px] bg-white border-4 border-sky-600' />
      <div className='flex flex-col gap-1 md:gap-[6px] w-full'>
        <div className='flex justify-between items-center'>
          <section className='flex gap-2 md:gap-4'>
            <p className='bg-green-200 text-center p-1 w-[100px] text-green-800 font-medium rounded-lg'>Searching</p>
            <p className='bg-sky-600 text-center p-1 w-[100px] text-white font-medium rounded-lg'>Remote</p>
          </section>
          <section className='hover:scale-105 cursor-pointer'>
            <BsBookmark className='h-full text-gray-400 text-2xl' strokeWidth={1.1} />
          </section>
        </div>
        <h5 className='font-bold text-lg'>John Smith</h5>
        <h6 className='font-semibold text-gray-900'>UX Designer</h6>
        <div className='flex justify-between items-center gap-1 text-sm text-neutral-900 max-w-[300px]'>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <FaSuitcase className='mb-[3px]' />
            Full-time
          </div>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <BiTime className='mb-[2px]' />
            Complete
          </div>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <IoLocationSharp className='mb-[2px]' />
            Barcelona
          </div>
        </div>
        <p className='text-sm text-gray-600 line-clamp-2 md:line-clamp-3 lg:line-clamp-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iure, fugit, nemo veritatis magnam error esse, qui minima exercitationem ullam voluptates cum possimus nulla impedit fuga delectus! Quo, porro cupiditate. </p>
      </div>
    </article>
  )
}
