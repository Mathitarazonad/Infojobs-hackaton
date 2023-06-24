/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './Menu'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'

export default function AuthButton () {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, userIsLoged } = useAuth()

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className='text-[26px] flex items-center gap-1 text-white cursor-pointer relative' onClick={() => handleClick()}>
        {!userIsLoged() &&
          <Link href='/login' className='flex items-center gap-2 hover:scale-105'>
            <FaUserCircle fontSize={30} />
            <p className='text-lg font-medium'>Sign in</p>
          </Link>}
        {(!isOpen && userIsLoged()) && <HiOutlineMenu className='md:hidden' fontSize={28} />}
        {userIsLoged() && <div className='flex items-center'>
          {(currentUser?.photoURL)
            ? <Image
                width={60}
                height={60}
                className='hidden md:block rounded-full w-[40px] min-w-[40px] h-[40px] object-cover hover:scale-95'
                src={currentUser?.photoURL as string}
                alt={currentUser?.fullname + 'profile photo' || 'Default profile photo'}
              />
            : <FaUserCircle fontSize={30} className='hidden md:block' />}
          {isOpen
            ? <IoMdArrowDropup className='hidden md:block hover:font-semibold' fontSize={28} />
            : <IoMdArrowDropdown className='hidden md:block hover:font-semibold' fontSize={28} />}
        </div>}
      </div>
      {userIsLoged() && <MobileMenu isOpen={isOpen} handleClick={handleClick} />}
    </>
  )
}
