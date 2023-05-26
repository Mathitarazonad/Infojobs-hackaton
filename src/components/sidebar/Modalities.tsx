'use client'
import { useRadio } from '@/hooks/useRadio'

export default function Modalities () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles } = useRadio()

  const handleClick = (value: number) => {
    changeSelectedInput(value)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Modality</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='modality' value='presential' id='presential' onClick={() => handleClick(0)} />
        <label className='text-sm' htmlFor='presential'>Presential</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='modality' value='hybrid' id='hybrid' onClick={() => handleClick(1)} />
        <label className='text-sm' htmlFor='hybrid'>Hybrid</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(2, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='modality' value='remote' id='remote' onClick={() => handleClick(2)} />
        <label className='text-sm' htmlFor='remote'>Remote</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(3, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='modality' value='any' id='any' onClick={() => handleClick(3)} />
        <label className='text-sm' htmlFor='any'>Any</label>
      </div>
    </section>
  )
}
