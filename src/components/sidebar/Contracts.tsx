'use client'
import { useFilter } from '@/hooks/useFilter'
import { Contract } from '@/types/types'

export default function Contracts () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles, updateFilterValues } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    changeSelectedInput(index)
    updateFilterValues('contract', e.target.value as Contract)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Contract</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract' value='full-time' id='full-time' onChange={(e) => handleChange(e, 0)} />
        <label className='text-sm' htmlFor='full-time'>Full-time</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract' value='fixed-term' id='fixed-term' onChange={(e) => handleChange(e, 1)} />
        <label className='text-sm' htmlFor='fixed-term'>Fixed-term</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract' value='any' id='any' onChange={(e) => handleChange(e, 1)} />
        <label className='text-sm' htmlFor='any'>Any</label>
      </div>
    </section>
  )
}
