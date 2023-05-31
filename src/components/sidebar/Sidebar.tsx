'use client'
import { useFilter } from '@/hooks/useFilter'
import Contracts from './Contracts'
import Modalities from './Modalities'
import Workdays from './Workdays'
import CloseFilter from './CloseFilter'
import Hired from './Hired'

export default function Sidebar () {
  const { filterOpen } = useFilter()

  const checkFilterState = () => {
    return filterOpen ? 'absolute left-4 right-4 min-h-[425px] flex-grow top-[17px] ' : 'hidden '
  }

  return (
    <aside className={checkFilterState() + 'drop-shadow-lg md:flex md:static flex-col gap-4 bg-white md:min-w-[200px] md:max-w-[250px] p-3 px-4 rounded-lg z-10 max-h-[580px]'}>
      <CloseFilter />
      <Hired />
      <Modalities />
      <Contracts />
      <Workdays />
    </aside>
  )
}
