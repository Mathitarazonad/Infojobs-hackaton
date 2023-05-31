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
    <div className='min-h-screen'>
      <div>
        <section className='bg-sky-600 w-screen h-[200px]'>
          <Image src={userData.photoURL !== '' ? userData.photoURL as string : '/images/defaultProfilePhoto.svg'} width={100} height={100} className='rounded-full min-w-[100px] min-h-[100px]' alt={userData.fullname + '\'s profile photo'} />
        </section>
      </div>
    </div>
  )
}
