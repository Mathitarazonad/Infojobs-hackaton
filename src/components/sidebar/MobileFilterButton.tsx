'use client'
import { useFilter } from '@/app/hooks/useFilter'

export default function MobileFilterButton () {
  const { changeFilterState } = useFilter()

  return (
    <div className='w-full md:hidden flex justify-end'>
      <button className='text-lg bg-sky-600 p-2 w-[80px] text-white tracking-wide' onClick={() => changeFilterState()}>
        Filter
      </button>
    </div>
  )
}
