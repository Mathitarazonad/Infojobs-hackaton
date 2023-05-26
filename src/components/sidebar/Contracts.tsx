'use client'
import { useRadio } from '@/app/hooks/useRadio'

export default function Contracts () {
  const { selectedInput, changeSelectedInput, checkForCheckedStyles } = useRadio()

  const handleClick = (index: number) => {
    changeSelectedInput(index)
  }

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Contract</h4>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(0, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract' value='full-time' id='full-time' onClick={() => handleClick(0)} />
        <label className='text-sm' htmlFor='full-time'>Full-time</label>
      </div>
      <div className={'flex gap-2 items-center' + `${checkForCheckedStyles(1, selectedInput)}`}>
        <input type='radio' className='appearance-none border-2 border-gray-500 rounded-full p-1 checked:border-[3px] checked:border-sky-600' name='contract' value='fixed-term' id='fixed-term' onClick={() => handleClick(1)} />
        <label className='text-sm' htmlFor='fixed-term'>Fixed-term</label>
      </div>
    </section>
  )
}
