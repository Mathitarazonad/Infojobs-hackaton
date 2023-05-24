import { FaUserCircle } from 'react-icons/fa'

export default function LogInButton () {
  return (
    <div className='text-[26px] flex items-center gap-1 text-white hover:scale-95 cursor-pointer'>
      <p className='text-lg font-medium'>Log In</p>
      <FaUserCircle />
    </div>
  )
}
