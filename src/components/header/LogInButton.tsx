/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'

export default function AuthButton () {
  const { logout, currentUser } = useAuth()
  const router = useRouter()

  const handleClick = async () => {
    if (currentUser !== null) {
      await logout()
      router.push('/login')
    }

    router.push('/login')
  }

  return (
    <div className='text-[26px] flex items-center gap-1 text-white hover:scale-95 cursor-pointer relative' onClick={() => handleClick()}>
      <p className='text-lg font-medium'>{currentUser !== null && currentUser !== undefined ? 'Sign Out' : 'Log in'}</p>
      {currentUser !== null && currentUser !== undefined && currentUser?.photoURL !== ''
        ? <Image src={currentUser.photoURL as string} alt={currentUser.fullname + 'Profile Photo'} width={40} height={40} className='rounded-full object-cover w-[40px] h-[40px]' />
        : <FaUserCircle />}
    </div>
  )
}
