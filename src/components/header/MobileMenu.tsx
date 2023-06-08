/* eslint-disable react/jsx-closing-tag-location */
import { useAuth } from '@/hooks/useAuth'
import { Employer, JobSeeker } from '@/types/types'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'

export default function MobileMenu ({ isOpen, handleClick }: { isOpen: boolean, handleClick: () => void }) {
  const { currentUser } = useAuth()
  const { fullname, photoURL, userType } = currentUser as JobSeeker | Employer

  return (
    <div className={(isOpen ? 'flex' : 'hidden') + ' flex-col gap-2 absolute top-0 right-0 md:right-[50px] md:top-[64px] xl:right-[200px] w-[300px] bg-white z-10 drop-shadow-lg text-black overflow-hidden'}>
      <section className='border-b-2 border-gray-300 flex items-center justify-between h-[68px] px-2'>
        <div className='flex items-center gap-2'>
          <Image width={50} height={50} src={photoURL !== '' ? photoURL as string : 'images/defaultProfilePhoto.svg'} className='rounded-full w-[50px] min-w-[50px] h-[50px] bg-white object-cover' alt='alt' />
          <h3 className='text-xl font-semibold'>{fullname}</h3>
        </div>
        <div onClick={() => handleClick()}>
          <IoMdClose fontSize={24} />
        </div>
      </section>
      <section className='flex flex-col gap-2 px-4 py-2 text-lg border-b-2 border-gray-300'>
        <h2 className='text-xl font-semibold'>Profile</h2>
        <p className='min-w-[84px] cursor-pointer md:hover:font-semibold duration-200'>My profile</p>
        <p className='min-w-[86px] cursor-pointer md:hover:font-semibold duration-200'>Sign Out</p>
      </section>
      {userType === 'EMPLOYER'
        ? <section className='flex flex-col gap-2 px-4 py-2 text-lg borer-b-2 border-gray-300 md:hidden'>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold duration-200'>My offers</p>
          <p className='min-w-[86px] cursor-pointer md:hover:font-semibold duration-200'>Post offer</p>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold duration-200'>Favorites</p>
        </section>
        : <section className='flex flex-col gap-2 px-4 py-2 text-lg borer-b-2 border-gray-300 md:hidden'>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold duration-200'>My candidatures</p>
          <p className='min-w-[84px] cursor-pointer md:hover:font-semibold duration-200'>Favorites</p>
        </section>}
    </div>
  )
}
