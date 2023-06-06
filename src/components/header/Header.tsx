'use client'
import Image from 'next/image'
import LogInButton from './LogInButton'

export default function Header () {
  return (
    <header className='w-full bg-sky-600 absolute flex justify-between items-center py-3 p-4 min-[64px] app_paddings'>
      <Image src='/images/infojobs.svg' alt='Infojobs Logo' width={100} height={100} />
      <ul className='hidden md:flex list-none items-center justify-center gap-5 text-white'>
        <li className='min-w-[74px] cursor-pointer hover:font-semibold duration-200'>My offers</li>
        <li className='min-w-[77px] cursor-pointer hover:font-semibold duration-200'>Post offer</li>
        <li className='min-w-[75px] cursor-pointer hover:font-semibold duration-200'>Favorites</li>
      </ul>
      <LogInButton />
    </header>
  )
}
