/* eslint-disable react/jsx-closing-tag-location */
'use client'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import MenuButton from './MenuButton'

export default function Header () {
  const { userIsLoged, currentUser } = useAuth()

  return (
    <header className='w-full bg-sky-600 absolute flex justify-between items-center py-3 p-4 min-h-[64px] app_paddings'>
      <Image src='/images/infojobs.svg' alt='Infojobs Logo' width={100} height={100} />
      {userIsLoged() &&
        <ul className='hidden md:flex text-lg list-none items-center justify-center gap-5 text-white'>
          {currentUser?.userType === 'EMPLOYER'
            ? <>
              <li className='min-w-[84px] cursor-pointer hover:font-semibold duration-200'>My offers</li>
              <li className='min-w-[86px] cursor-pointer hover:font-semibold duration-200'>Post offer</li>
              <li className='min-w-[84px] cursor-pointer hover:font-semibold duration-200'>Favorites</li>
            </>
            : <>
              <li className='min-w-[84px] cursor-pointer hover:font-semibold duration-200'>My candidatures</li>
              <li className='min-w-[84px] cursor-pointer hover:font-semibold duration-200'>Saved</li>
            </>}
        </ul>}
      <MenuButton />
    </header>
  )
}
