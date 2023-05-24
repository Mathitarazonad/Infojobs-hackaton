'use client'
import { useRadio } from '@/app/hooks/useRadio'

export default function Workdays () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles } = useRadio()

  const handleClick = (index: number) => {
    changeSelectedInput(index)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Workday</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='complete' id='complete' onClick={() => handleClick(0)} />
        <label className='text-sm' htmlFor='complete'>Complete</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`} onClick={() => handleClick(1)}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='partial' id='partial' onClick={() => handleClick(1)} />
        <label className='text-sm' htmlFor='partial'>Partial</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`} onClick={() => handleClick(1)}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='workday' value='undefined' id='undefined' onClick={() => handleClick(2)} />
        <label className='text-sm' htmlFor='undefined'>Undefined</label>
      </div>
    </section>
  )
}
