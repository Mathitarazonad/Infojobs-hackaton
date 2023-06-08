/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import { useAuth } from '@/hooks/useAuth'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function AuthButton () {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, userIsLoged } = useAuth()

  const handleClick = () => {
    setIsOpen(prev => !prev)
    // if (currentUser !== null) {
    //   await logout()
    //   router.push('/login')
    // }

    // router.push('/login')
  }

  return (
    <>
      <div className='text-[26px] flex items-center gap-1 text-white cursor-pointer relative' onClick={() => handleClick()}>
        <div>
          {!isOpen && <HiOutlineMenu className='md:hidden' fontSize={28} />}
        </div>
        {!userIsLoged() && <p className='text-lg font-medium'>Sign in</p>}
        {userIsLoged() && currentUser?.photoURL !== ''
          ? <>
            <Image
              src={currentUser?.photoURL as string}
              alt={currentUser?.fullname as string + 'Profile Photo'}
              width={40} height={40}
              className='hidden md:block rounded-full object-cover w-[40px] h-[40px]'
            />
            <IoMdArrowDropdown className='hidden md:block' />
          </>
          : <FaUserCircle />}
      </div>
      <MobileMenu isOpen={isOpen} handleClick={handleClick} />
    </>
  )
}
