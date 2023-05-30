import { PreviousEmployment } from '@/types/types'
import { useState } from 'react'
import { IoMdRemoveCircle } from 'react-icons/io'

const initialFieldValues: PreviousEmployment = {
  company: '',
  employmentRole: '',
  time: ''
}

export default function Employment () {
  const [employment, setEmployment] = useState<PreviousEmployment>(initialFieldValues)
  const [previousEmployments, setPreviousEmployments] = useState<PreviousEmployment[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    setEmployment(prev => ({ ...prev, [field]: fieldValue }))
  }

  const handleAdd = () => {
    const { company, employmentRole, time } = employment
    if (company !== '' && employmentRole !== '' && time !== '') {
      setPreviousEmployments(prev => [...prev, employment])
      setEmployment(initialFieldValues)
    }
  }

  const handleRemove = (employmentToRemove: PreviousEmployment) => {
    setPreviousEmployments(prev => prev.filter(employment => employment.company !== employmentToRemove.company || employment.employmentRole !== employmentToRemove.employmentRole || employment.time !== employmentToRemove.time))
  }

  return (
    <div className='flex flex-col w-full gap-2 text-gray-800'>
      <h4>Add your previous employments here (optional)</h4>
      <input className='hidden' defaultValue={JSON.stringify(previousEmployments)} name='previousEmployments' />
      <fieldset className='grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4'>
        <input
          onChange={handleChange}
          value={employment.company}
          name='company'
          className='outline-none py-[6px] border-b-2 border-gray-300 autofill:shadow-autofill-without-bg '
          placeholder='Spotify'
        />
        <input
          onChange={handleChange}
          value={employment.time}
          name='time'
          className='outline-none py-[6px] border-b-2 border-gray-300 autofill:shadow-autofill-without-bg'
          placeholder='2 years'
        />
        <input
          onChange={handleChange}
          value={employment.employmentRole}
          name='employmentRole'
          className='outline-none py-[6px] border-b-2 border-gray-300 col-span-1 autofill:shadow-autofill-without-bg'
          placeholder='Data analyst'
        />
        <div className='flex items-center justify-end'>
          <button type='button' className='blue_button' onClick={() => handleAdd()}>Add</button>
        </div>
      </fieldset>
      <ul className='grid cols-span-2 gap-5 text-gray-900'>
        {previousEmployments.map((employment, index) =>
          <li key={index} className='border-b-2 border-gray-300 relative flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h5 className='font-bold break-words max-w-[160px]'>{employment.company}</h5>
              <div className='cursor-pointer' onClick={() => handleRemove(employment)}>
                <IoMdRemoveCircle fontSize={20} />
              </div>
            </div>
            <p><span className='font-semibold'>Role: </span>{employment.employmentRole}</p>
            <p><span className='font-semibold'>Time: </span>{employment.time}</p>
          </li>
        )}
      </ul>
    </div>
  )
}
