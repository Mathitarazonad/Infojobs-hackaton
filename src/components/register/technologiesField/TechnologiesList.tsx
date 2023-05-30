import { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import TechnologiesInput from './TechnologiesInput'

export default function TechnologiesList () {
  const [technologies, setTechnologies] = useState<string[]>([])
  const [technologyToAdd, setTechnologyToAdd] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnologyToAdd(e.target.value)
  }

  const capitalizeStr = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const addTechnology = () => {
    const technology = capitalizeStr(technologyToAdd)
    if (technology !== '' && !technologies.includes(technology)) {
      setTechnologies(prev => [...prev, technology])
      setTechnologyToAdd('')
    }
  }

  const changeTechnology = (index: number, value: string) => {
    const techonology = capitalizeStr(value)

    if (!technologies.includes(techonology)) {
      setTechnologies(prev => {
        const newTechnologies = [...prev]
        newTechnologies[index] = capitalizeStr(value)
        return newTechnologies
      })
    }
  }

  const removeTechnology = (indexToRemove: number) => {
    setTechnologies(prev => prev.filter((t, index) => index !== indexToRemove))
  }

  return (
    <div className='w-full'>
      <h4>What technologies do you use? (Optional)</h4>
      <div className='grid grid-cols-2 gap-x-5 gap-y-3'>
        <div className='border-b-2 border-gray-300 cursor-pointer col-span-1 flex items-center'>
          <input id='technology' placeholder='Add technology' value={technologyToAdd} onChange={handleChange} className='border-none outline-none bg-transparent col-span-1 py-[6px] autofill:shadow-autofill-without-bg' />
          <div className='text-sky-600 text-xl -ml-7' onClick={() => addTechnology()}>
            <IoMdAddCircle />
          </div>
        </div>
        <ul className='flex gap-2 items-center flex-wrap row-span-2 col-span-2'>
          {technologies.length > 0 && <p className='font-semibold'>Technologies: </p>}
          {technologies.map((tech, index) =>
            <TechnologiesInput key={index} index={index} changeTechnology={changeTechnology} removeTechnology={removeTechnology} value={tech} />)}
        </ul>
      </div>
      <input id='technologies' className='hidden' name='technologies' defaultValue={technologies} />
    </div>
  )
}
