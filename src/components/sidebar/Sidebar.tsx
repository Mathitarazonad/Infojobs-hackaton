'use client'
import { useFilter } from '@/app/hooks/useFilter'
import Contracts from './Contracts'
import Languages from './Languages'
import Modalities from './Modalities'
import Workdays from './Workdays'
import CloseFilter from './CloseFilter'

export default function Sidebar () {
  const { filterOpen } = useFilter()

  const checkFilterState = () => {
    return filterOpen ? 'absolute left-4 right-4 min-h-[425px] flex-grow top-[17px] ' : 'hidden '
  }

  return (
    <aside className={checkFilterState() + 'md:flex md:static flex-col gap-4 bg-white md:min-w-[200px] md:max-w-[250px] p-3 px-4 rounded-lg'}>
      <CloseFilter />
      <Modalities />
      <Contracts />
      <Workdays />
      <Languages />
    </aside>
  )
}
