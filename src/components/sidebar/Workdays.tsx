'use client'
import { useFilter } from '@/hooks/useFilter'
import { Workday } from '@/types/types'

export default function Workdays () {
  const { checkForCheckedStyles, updateFilterValues, filterValues } = useFilter()
  const filterType = 'workday'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterValues(filterType, e.target.value as Workday)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Workday</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(filterType, 'complete')}`}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='complete'
          id='complete'
          onChange={handleChange}
          checked={filterValues[filterType] === 'complete'}
        />
        <label className='text-sm' htmlFor='complete'>Complete</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(filterType, 'partial')}`}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='partial'
          id='partial'
          onChange={handleChange}
          checked={filterValues[filterType] === 'partial'}
        />
        <label className='text-sm' htmlFor='partial'>Partial</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(filterType, 'undefined')}`}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='undefined'
          id='undefined'
          onChange={handleChange}
          checked={filterValues[filterType] === 'undefined'}
        />
        <label className='text-sm' htmlFor='undefined'>Undefined</label>
      </div>
    </section>
  )
}
