'use client'
import { useFilter } from '@/hooks/useFilter'
import Contracts from './Contracts'
import Modalities from './Modalities'
import Workdays from './Workdays'
import CloseFilter from './CloseFilter'
import Hired from './Hired'

export default function Sidebar () {
  const { filterOpen, clearFilter } = useFilter()

  const checkFilterState = () => {
    return filterOpen ? 'absolute left-4 right-4 top-[17px] flex gap-2 ' : 'hidden '
  }

  return (
    <aside className={checkFilterState() + 'drop-shadow-lg md:flex md:static flex-col gap-4 bg-white md:min-w-[200px] md:max-w-[250px] p-3 px-4 rounded-lg z-10 max-h-[580px]'}>
      <CloseFilter />
      <button type='button' className='absolute md:text-sm top-[14px] right-10 md:top-4 md:right-3 font-semibold text-gray-950 hover:scale-95 duration-200' onClick={() => clearFilter()}>
        Clear
      </button>
      <Hired />
      <Modalities />
      <Contracts />
      <Workdays />
    </aside>
  )
}
