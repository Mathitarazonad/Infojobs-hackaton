/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable react/jsx-closing-tag-location */
import { useAuth } from '@/hooks/useAuth'
import { Employer, JobSeeker } from '@/types/types'
import Image from 'next/image'
import { BiLogOut } from 'react-icons/bi'
import { BsBookmarksFill, BsCardChecklist } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export default function MobileMenu ({ isOpen, handleClick }: { isOpen: boolean, handleClick: () => void }) {
  const { currentUser, logout } = useAuth()
  const { fullname, email, photoURL, userType } = currentUser as JobSeeker | Employer
  return (
    <div className={(isOpen ? 'flex' : 'hidden') + ' flex-col gap-2 md:rounded-lg absolute top-0 right-0 md:right-[50px] md:top-[68px] xl:right-[200px] w-[300px] bg-white text-gray-900 z-10 drop-shadow-lg overflow-hidden'}>
      <section className='border-b-2 border-gray-300 flex items-center justify-between h-[68px] px-2'>
        <div className='flex items-center gap-2'>
          <Image width={50} height={50} src={photoURL !== '' ? photoURL as string : 'images/defaultProfilePhoto.svg'} className='rounded-full w-[40px] min-w-[40px] h-[40px] object-cover' alt='alt' />
          <div className='max-w-[210px]'>
            <h3 className='text-xl font-semibold'>{fullname}</h3>
            <p className='text-xs break-words'>{email}</p>
          </div>
        </div>
        <div onClick={() => handleClick()} className='hover:scale-110 duration-200 cursor-pointer'>
          <IoMdClose fontSize={24} />
        </div>
      </section>
      <section className='flex flex-col gap-2 pl-4 py-2 text-lg border-b-2 border-gray-300'>
        <h3 className='text-lg font-semibold'>Profile</h3>
        <div className="flex gap-2 items-center cursor-pointer md:hover:font-semibold md:hover:after:content-[''] hover:after:w-2 after:h-6 after:absolute after:right-0 after:bg-gray-900 after:rounded-l-lg">
          <FaUserCircle />
          <p>My profile</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer md:hover:font-semibold md:hover:after:content-[''] hover:after:w-2 after:h-6 after:absolute after:right-0 after:bg-gray-900 after:rounded-l-lg" onClick={() => logout()}>
          <BiLogOut />
          <p>Sign out</p>
        </div>
      </section>
      {userType === 'EMPLOYER'
        ? <section className='flex flex-col gap-2 pl-4 py-2 text-lg md:hidden'>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold'>My offers</p>
          <p className='min-w-[86px] cursor-pointer md:hover:font-semibold'>Post offer</p>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold'>Favorites</p>
        </section>
        : <section className='flex flex-col gap-2 px-4 py-2 text-lg md:hidden justify-center'>
          <div className="flex gap-2 items-center cursor-pointer md:hover:font-semibold md:hover:after:content-[''] hover:after:w-2 after:h-6 after:absolute after:right-0 after:bg-gray-900 after:rounded-l-lg">
            <BsCardChecklist />
            <p className='min-w-[84px]'>My candidatures</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer md:hover:font-semibold md:hover:after:content-[''] hover:after:w-2 after:h-6 after:absolute after:right-0 after:bg-gray-900 after:rounded-l-lg">
            <BsBookmarksFill />
            <p className='min-w-[84px]'>Favorites</p>
          </div>
        </section>}
    </div>
  )
}
