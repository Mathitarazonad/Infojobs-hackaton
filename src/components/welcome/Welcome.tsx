export default function Landing() {
  return (
    <section className="p-4 home_background w-screen h-screen flex flex-col items-center justify-center gap-3 text-white text-center sm:px-[50px] lg:px-[200px]">
      <h2 className='font-semibold tracking-wide text-4xl sm:text-5xl'>
        Employer Infojobs
      </h2>
      <p className='text-lg sm:text-xl'>There are a lot of people who wants to work in your company out there!</p>
      <p className='text-base sm:text-lg'>Don't have an account yet?</p>
      <button className='border-2 border-white p-2 px-4 font-medium hover:bg-white hover:bg-opacity-30 duration-300'>
        Register
      </button>
    </section>
  )
}
