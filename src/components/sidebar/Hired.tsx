'use client'
import { useRadio } from '@/hooks/useRadio'

export default function Hired () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles } = useRadio()

  const handleClick = (index: number) => {
    changeSelectedInput(index)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Status</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='status' value='searching' id='searching' onClick={() => handleClick(0)} />
        <label className='text-sm' htmlFor='searching'>Searching</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='status' value='hired' id='hired' onClick={() => handleClick(1)} />
        <label className='text-sm' htmlFor='hired'>Hired</label>
      </div>
    </section>
  )
}
