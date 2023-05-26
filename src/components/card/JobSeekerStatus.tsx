import { Status } from '@/types/types'

export default function JobSeekerStatus ({ status }: { status: Status }) {
  if (status === 'searching') {
    return (
      <p className='bg-green-200 text-center p-1 w-[100px] text-green-800 font-medium rounded-lg'>
        Searching
      </p>
    )
  }

  return (
    <p className='bg-gray-300 text-center p-1 w-[100px] text-gray-700 font-medium rounded-lg'>
      Hired
    </p>
  )
}
