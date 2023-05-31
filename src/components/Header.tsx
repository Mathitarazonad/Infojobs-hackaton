import Image from 'next/image'
import LogInButton from './LogInButton'

export default function Header () {
  return (
    <header className='w-full bg-sky-600 absolute flex justify-between items-center py-3 p-4 min-[64px] sm:px-[50px] lg:px-[200px]'>
      <Image src='/images/infojobs.svg' alt='Infojobs Logo' width={100} height={100} />
      <LogInButton />
    </header>
  )
}
