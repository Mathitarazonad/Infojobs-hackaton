import { Skeleton } from '../shadcn/skeleton'

export default function CardLoader () {
  return (
    <article className='drop-shadow-lg w-full min-w-[300px] min-h-[176px] md:min-h-[220px] bg-white p-2 md:p-4 lg:p-6 flex gap-2 rounded-lg'>
      <Skeleton className='rounded-full w-[45px] min-w-[45px] h-[45px] md:w-[55px] md:min-w-[55px] md:h-[55px] lg:w-[65px] lg:min-w-[65px] lg:h-[65px] bg-gray-300 object-cover' />
      <div className='flex flex-col gap-2 md:gap-4 w-full'>
        <div className='flex justify-between items-center'>
          <section className='flex gap-2 md:gap-4'>
            <Skeleton className='p-4 w-[100px] bg-gray-300 rounded-lg' />
            <Skeleton className='p-4 w-[100px] bg-gray-300 rounded-lg' />
          </section>
        </div>
        <Skeleton className='w-[100px] bg-gray-300 p-2' />
        <Skeleton className='w-[100px] bg-gray-300 p-1' />
        <div className='flex justify-start items-center gap-3'>
          <Skeleton className='bg-gray-300 flex-1 md:min-w-[95px] p-1' />
          <Skeleton className='bg-gray-300 flex-1 md:min-w-[95px] p-1' />
          <Skeleton className='bg-gray-300 flex-1 md:min-w-[95px] p-1' />
        </div>
        <Skeleton className='bg-gray-300 w-full p-1' />
        <Skeleton className='bg-gray-300 w-[80%] p-1' />
        <Skeleton className='bg-gray-300 w-[70%] p-1' />
      </div>
    </article>
  )
}
