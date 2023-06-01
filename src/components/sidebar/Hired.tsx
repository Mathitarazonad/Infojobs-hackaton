'use client'
import { useFilter } from '@/hooks/useFilter'
import { Status } from '@/types/types'

export default function Hired () {
  const { checkForCheckedStyles, updateFilterValues, filterValues } = useFilter()
  const filterType = 'status'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterValues(filterType, e.target.value as Status)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Status</h4>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'searching')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='searching'
          id='searching'
          onChange={handleChange}
          checked={filterValues[filterType] === 'searching'}
        />
        <label className='text-sm' htmlFor='searching'>Searching</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'hired')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='hired'
          id='hired'
          onChange={handleChange}
          checked={filterValues[filterType] === 'hired'}
        />
        <label className='text-sm' htmlFor='hired'>Hired</label>
      </div>
    </section>
  )
}
