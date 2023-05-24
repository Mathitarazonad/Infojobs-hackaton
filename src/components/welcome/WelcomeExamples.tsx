import Image from 'next/image'

export default function WelcomeExamples () {
  return (
    <section className='w-full bg-none min-h-screen p-5 sm:p-[50px] lg:px-[200px] text-center flex flex-col justify-center items-center gap-4'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold sm:text-4xl md:text-5xl'>InfoJobs makes it easier for you to find people or jobs</h3>
        <p className='text-sm sm:text-base md:text-lg'> Users can create profiles, search for jobs, and apply easily. Employers can post job listings and find qualified candidates efficiently.</p>
      </div>
      <div className='w-full flex gap-3 sm:gap-5 justify-center items-center'>
        <div className='max-w-[500px] w-full flex flex-col gap-3 lg:items-start '>
          <article className='w-full flex justify-start'>
            <Image src='/images/john-card-example.png' width={350} height={100} className='w-full sm:max-w-[375px]' alt='Employee Example number one' />
          </article>
          <article className='w-full flex justify-center'>
            <Image src='/images/emily-card-example.png' width={350} height={100} className='w-full sm:max-w-[375px]' alt='Employee Example number two' />
          </article>
          <article className=' w-full flex justify-end'>
            <Image src='/images/steve-card-example.png' width={350} height={100} className='w-full sm:max-w-[375px]' alt='Employee Example number three' />
          </article>
        </div>
        <div className='hidden md:flex items-center '>
          <Image src='/images/employerSearching.svg' width={300} height={100} alt='Employer searching img' />
        </div>
      </div>
    </section>
  )
}
