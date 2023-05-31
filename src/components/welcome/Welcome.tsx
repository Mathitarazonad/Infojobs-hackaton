import Link from 'next/link'

export default function Welcome () {
  return (
    <section className='p-4 welcome_background w-screen h-screen flex flex-col items-center justify-center gap-3 text-white text-center sm:px-[50px] lg:px-[200px]'>
      <h2 className='font-semibold tracking-wide text-4xl sm:text-5xl'>
        Employer Infojobs
      </h2>
      <p className='text-lg sm:text-xl'>There are a lot of people who wants to work in your company out there!</p>
      <p className='text-base sm:text-lg'>Already have an account?<Link href='/login' className='underline'> Sign in</Link></p>
      <Link href='/register/employer' className='border-2 border-white p-2 px-4 font-medium hover:bg-white hover:bg-opacity-30 duration-300'>
        Register
      </Link>
    </section>
  )
}
