'use client'
import { useFilter } from '@/hooks/useFilter'
import { Contract } from '@/types/types'

export default function Workdays () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles, updateFilterValues } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    changeSelectedInput(index)
    updateFilterValues('contract', e.target.value as Contract)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Workday</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='complete' id='complete' onChange={(e) => handleChange(e, 0)} />
        <label className='text-sm' htmlFor='complete'>Complete</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='partial' id='partial' onChange={(e) => handleChange(e, 1)} />
        <label className='text-sm' htmlFor='partial'>Partial</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(2, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='undefined' id='undefined' onChange={(e) => handleChange(e, 2)} />
        <label className='text-sm' htmlFor='undefined'>Undefined</label>
      </div>
    </section>
  )
}
