/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

export default function AuthButton () {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, userIsLoged } = useAuth()

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className='text-[26px] flex items-center gap-1 text-white cursor-pointer relative' onClick={() => handleClick()}>
        <div>
          {!isOpen && <HiOutlineMenu className='md:hidden' fontSize={28} />}
        </div>
        {!userIsLoged() && <Link href='/login' className='text-lg font-medium hover:scale-105'>Sign in</Link>}
        {userIsLoged() &&
        <div className='flex items-center'>
          <Image
            width={60}
            height={60}
            className='hidden md:block rounded-full w-[40px] min-w-[40px] h-[40px] bg-white object-cover hover:scale-95'
            src={currentUser?.photoURL !== '' ? currentUser?.photoURL as string : 'images/defaultProfilePhoto.svg'}
            alt={currentUser?.fullname as string + 'profile photo' || 'Default profile photo'}
          />
          {isOpen
            ? <IoMdArrowDropup className='hidden md:block hover:font-semibold' fontSize={28} />
            : <IoMdArrowDropdown className='hidden md:block hover:font-semibold' fontSize={28} />}
        </div>}
      </div>
      {userIsLoged() && <MobileMenu isOpen={isOpen} handleClick={handleClick} />}
    </>
  )
}
