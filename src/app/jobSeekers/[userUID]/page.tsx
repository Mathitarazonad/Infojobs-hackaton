import Header from '@/components/Header'
import { useFirestore } from '@/hooks/useFirestore'
import { JobSeeker } from '@/types/types'
import Image from 'next/image'
interface Props {
  params: {
    userUID: string
  }
}

export default async function JobSeekerPage ({ params }: Props) {
  const { userUID } = params
  const { getDocument } = useFirestore()
  const userData = await getDocument('uid', 'jobSeekerList', userUID) as JobSeeker

  return (
    <>
      <Header />
      <div className='h-screen pt-[64px] bg-gray-100'>
        <div className='flex flex-col items-center gap-5'>
          <section className='max-w-lg pt-[130px]'>
            <div className='bg-white drop-shadow-lg p-6 rounded-lg flex flex-col gap-1 md:gap-3 relative'>
              <Image src={userData.photoURL !== '' ? userData.photoURL as string : '/images/defaultProfilePhoto.svg'} width={130} height={130} className='rounded-full object-cover absolute -top-[100px] right-0 w-[130px] h-[130px] lg:w-[200px] lg:h-[200px]' alt={userData.fullname + '\'s profile photo'} />
              <h1 className='text-3xl font-bold'>{userData.fullname}</h1>
              <h2 className='text-2xl font-semibold'>{userData.role}</h2>
              <h3 className='text-xl font-semibold text-gray-950'>{userData.age} Years</h3>
              <p>{userData.description}</p>
              <div className='flex flex-col gap-1 w-[150px]'>
                <h4 className='text-lg font-bold border-b-2 border-gray-300'>Role</h4>
                <p>{userData.role}</p>
              </div>
              <div className='flex flex-col gap-1 w-[150px]'>
                <h4 className='text-lg font-bold border-b-2 border-gray-300'>Contract</h4>
                <p>{userData.desiredContract}</p>
              </div>
              <div className='flex flex-col gap-1 w-[150px]'>
                <h4 className='text-lg font-bold border-b-2 border-gray-300'>Workday</h4>
                <p>{userData.workday}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
