import Header from '@/components/Header'
import { useFirestore } from '@/hooks/useFirestore'
import { JobSeeker, PreviousEmployment } from '@/types/types'
import { IoLocationSharp } from 'react-icons/io5'
import Image from 'next/image'
import AuthProtect from '@/contexts/AuthProtect'
interface Props {
  params: {
    userUID: string
  }
}

export default async function JobSeekerPage ({ params }: Props) {
  const { userUID } = params
  const { getDocument } = useFirestore()
  const userData = await getDocument('uid', 'jobSeekerList', userUID) as JobSeeker
  const previousEmployments = userData.previousEmployments as PreviousEmployment[]
  const technologies = (userData.technologies as string[]).filter(tech => tech !== '')

  const capitalizeStr = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <AuthProtect>
      <Header />
      <div className='min-h-screen pt-[84px] pb-4 bg-gray-100 px-4'>
        <div className='flex flex-col items-center gap-5'>
          <div className='bg-white drop-shadow-lg p-6 rounded-lg flex flex-col gap-2 md:gap-3 relative max-w-xl'>
            <div className='flex gap-5 items-center border-b-2 pb-5 border-gray-300'>
              <Image src={userData.photoURL !== '' ? userData.photoURL as string : '/images/defaultProfilePhoto.svg'} width={130} height={110} className='rounded-full object-cover min-w-[110px] w-[110px] h-[110px] md:w-[200px] md:h-[200px]' alt={userData.fullname + '\'s profile photo'} />
              <div>
                <h1 className='text-3xl font-bold'>{userData.fullname}</h1>
                <h2 className='text-2xl font-semibold text-gray-950'>{userData.role}</h2>
                <h3 className='text-xl font-semibold text-gray-950 flex items-center'>
                  <IoLocationSharp />{userData.city}
                </h3>
              </div>
            </div>
            <p>{userData.description}</p>
            {technologies.length > 0 &&
              <div>
                <p><span className='font-bold'>Technologies: </span>{technologies.join(', ') + '.'}</p>
              </div>}
            {userData.experienceYears > 0 &&
              <p><span className='font-bold'>Experience: </span>{userData.experienceYears} years</p>}
            <div className='flex flex-col gap-1 w-[165px]'>
              <h4 className='text-lg font-bold border-b-2 border-gray-300'>Modality</h4>
              <p>{capitalizeStr(userData.jobModality)}</p>
            </div>
            <div className='flex flex-col gap-1 w-[165px]'>
              <h4 className='text-lg font-bold border-b-2 border-gray-300'>Desired Contract</h4>
              <p>{capitalizeStr(userData.desiredContract)}</p>
            </div>
            <div className='flex flex-col gap-1 w-[165px]'>
              <h4 className='text-lg font-bold border-b-2 border-gray-300'>Workday</h4>
              <p>{capitalizeStr(userData.workday)}</p>
            </div>
            {previousEmployments.length > 0 &&
              <>
                <h4 className='text-lg font-bold border-b-2 border-gray-300'>Previous Employments</h4>
                <ul className='grid cols-span-2 grid-cols-2 gap-5'>
                  {previousEmployments.map((employment, index) =>
                    <li key={index} className='border-b-2 border-gray-300 relative flex flex-col gap-2'>
                      <div className='flex justify-between'>
                        <h5 className='font-bold break-words max-w-[160px]'>{employment.company}</h5>
                      </div>
                      <p><span className='font-semibold'>Role: </span>{employment.employmentRole}</p>
                      <p><span className='font-semibold'>Time: </span>{employment.time}</p>
                    </li>)}
                </ul>
              </>}
            <div className='flex flex-col gap-2'>
              <h4 className='text-lg font-bold border-b-2 border-gray-300'>Contact</h4>
              <p className='flex gap-1'><span className='font-bold'>Email: </span>{userData.email}</p>
              <p className='flex gap-1'><span className='font-bold'>Phone: </span>{userData.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </AuthProtect>
  )
}
