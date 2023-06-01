'use client'
import { useFilter } from '@/hooks/useFilter'
import { JobModality } from '@/types/types'

export default function Modalities () {
  const { checkForCheckedStyles, updateFilterValues, filterValues } = useFilter()
  const filterType = 'modality'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterValues(filterType, e.target.value as JobModality)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Modality</h4>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'presential')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='presential'
          id='presential'
          onChange={handleChange}
          checked={filterValues[filterType] === 'presential'}
        />
        <label className='text-sm' htmlFor='presential'>Presential</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'hybrid')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='hybrid'
          id='hybrid'
          onChange={handleChange}
          checked={filterValues[filterType] === 'hybrid'}
        />
        <label className='text-sm' htmlFor='hybrid'>Hybrid</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'remote')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='remote'
          id='remote'
          onChange={handleChange}
          checked={filterValues[filterType] === 'remote'}
        />
        <label className='text-sm' htmlFor='remote'>Remote</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'any')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600'
          value='any'
          id='any'
          onChange={handleChange}
          checked={filterValues[filterType] === 'any'}
        />
        <label className='text-sm' htmlFor='any'>Any</label>
      </div>
    </section>
  )
}
