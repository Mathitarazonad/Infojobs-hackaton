import LogInButton from './LogInButton'

export default function Header() {
  return (
    <header className='w-screen bg-sky-600 absolute flex justify-between items-center py-3 p-4 sm:px-[50px] lg:px-[200px]'>
      <img src='/images/infojobs.svg' alt='Infojobs Logo' className='w-[100px]'/>
      <LogInButton />
    </header>
  )
}
