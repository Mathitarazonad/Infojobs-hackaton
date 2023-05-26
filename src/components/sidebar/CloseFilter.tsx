import { useFilter } from '@/hooks/useFilter'
import { IoClose } from 'react-icons/io5'

export default function CloseFilter () {
  const { changeFilterState } = useFilter()

  return (
    <button className='md:hidden absolute right-3 top-4 text-xl' onClick={() => changeFilterState()}>
      <IoClose />
    </button>
  )
}
