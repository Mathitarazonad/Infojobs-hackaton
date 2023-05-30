'use client'
import { IoMdRemoveCircle } from 'react-icons/io'
import { useState } from 'react'

interface Props {
  index: number
  changeTechnology: (index: number, value: string) => void
  removeTechnology: (index: number) => void
  value: string
}

export default function TechnologiesInput ({ index, changeTechnology, removeTechnology, value }: Props) {
  const [technology, setTechnology] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value)

    if (e.target.value === '') {
      removeTechnology(index)
      return
    }

    changeTechnology(index, e.target.value)
  }

  return (
    <div className='bg-sky-600 text-white py-1 px-2 flex justify-center items-center gap-1'>
      <input value={technology} onChange={handleChange} className='border-none outline-none bg-transparent w-[90px] selection:bg-sky-400' />
      <div className='text-xl cursor-pointer' onClick={() => removeTechnology(index)}>
        <IoMdRemoveCircle />
      </div>
    </div>
  )
}
