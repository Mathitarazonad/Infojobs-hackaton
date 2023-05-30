'use client'
import { useFilter } from '@/hooks/useFilter'
import { Contract } from '@/types/types'

export default function Hired () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles, updateFilterValues } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    changeSelectedInput(index)
    updateFilterValues('contract', e.target.value as Contract)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Status</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='status' value='searching' id='searching' onChange={(e) => handleChange(e, 0)} />
        <label className='text-sm' htmlFor='searching'>Searching</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='status' value='hired' id='hired' onChange={(e) => handleChange(e, 1)} />
        <label className='text-sm' htmlFor='hired'>Hired</label>
      </div>
    </section>
  )
}
