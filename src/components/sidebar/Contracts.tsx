'use client'
import { useFilter } from '@/hooks/useFilter'
import { Contract } from '@/types/types'

export default function Contracts () {
  const { checkForCheckedStyles, updateFilterValues, filterValues } = useFilter()
  const filterType = 'contract'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterValues('contract', e.target.value as Contract)
  }

  return (
    <fieldset className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Contract</h4>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'full-time')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract'
          value='full-time'
          id='full-time'
          onChange={handleChange}
          checked={filterValues[filterType] === 'full-time'}
        />
        <label className='text-sm' htmlFor='full-time'>Full-time</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'fixed-term')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract'
          value='fixed-term'
          id='fixed-term'
          onChange={handleChange}
          checked={filterValues[filterType] === 'fixed-term'}
        />
        <label className='text-sm' htmlFor='fixed-term'>Fixed-term</label>
      </div>
      <div className={'flex gap-2 items-center' + checkForCheckedStyles(filterType, 'any')}>
        <input
          type='radio'
          className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract'
          value='any'
          id='anyContract'
          onChange={handleChange}
          checked={filterValues[filterType] === 'any'}
        />
        <label className='text-sm' htmlFor='anyContract'>Any</label>
      </div>
    </fieldset>
  )
}
