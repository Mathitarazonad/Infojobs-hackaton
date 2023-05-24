import Contracts from './Contracts'
import Languages from './Languages'
import Modalities from './Modalities'
import Workdays from './Workdays'

export default function Sidebar () {
  return (
    <aside className='hidden md:flex flex-col gap-4 bg-white h-[15%] min-w-[200px] max-w-[250px] p-3 px-4 rounded-lg'>
      <Modalities />
      <Contracts />
      <Workdays />
      <Languages />
    </aside>
  )
}
