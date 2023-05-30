'use client'
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from 'next/image'
import { useFirestore } from '@/hooks/useFirestore'
import FormSteps from '@/components/register/FormStepsProgress'
import FirstFormStep from '@/components/register/formStepsComponents/FirstFormStep'
import SecondFormStep from '@/components/register/formStepsComponents/SecondFormStep'
import ThirdFormStep from '@/components/register/formStepsComponents/ThirdFormStep'
import FourthFormStep from '@/components/register/formStepsComponents/FourthFormStep'
import { useContext } from 'react'
import { FormContext, FormContextType } from '@/contexts/FormContext'
import { v4 as uuid } from 'uuid'
import { useAuth } from '@/hooks/useAuth'
import { JobSeekerRegisterValues } from '@/hooks/useForm'
import { useFirestorage } from '@/hooks/useFirestorage'
import { useAppMode } from '@/hooks/useAppMode'

export default function Page () {
  const { formStep, ableToSubmit } = useContext(FormContext) as FormContextType
  const { addDocument } = useFirestore()
  const { uploadImage, getImageURL } = useFirestorage()
  const { createProfile } = useAuth()
  const { changeToJobSeeker } = useAppMode()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault()

    if (formStep < 3 || !ableToSubmit) {
      return
    }

    changeToJobSeeker()
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())
    const documentToAdd = { ...formValues, uid: uuid() } as JobSeekerRegisterValues

    if ((documentToAdd.photoURL as File).name !== '') {
      await uploadImage(documentToAdd.photoURL as File, documentToAdd.uid)
      documentToAdd.photoURL = await getImageURL(documentToAdd.uid)
    }

    documentToAdd.technologies = (documentToAdd.technologies as string).split(',')

    if (documentToAdd.previousEmployments !== undefined) {
      documentToAdd.previousEmployments = JSON.parse(documentToAdd.previousEmployments as string)
    } else {
      documentToAdd.photoURL = ''
    }
    await createProfile(documentToAdd.email, documentToAdd.password as string)

    delete documentToAdd.password
    delete documentToAdd.company
    delete documentToAdd.employmentRole
    delete documentToAdd.time

    await addDocument('jobSeekerList', documentToAdd, documentToAdd.uid)
  }

  return (
    <div className='flex justify-center items-center p-5 min-h-screen'>
      <form className='flex flex-col items-center gap-5 w-full max-w-md bg-white drop-shadow-lg p-4' onSubmit={async (e) => await handleSubmit(e)}>
        <Image src='/images/infojobsLogo.svg' width={100} height={100} alt='Infojobs Logo' />
        <div className='flex flex-col gap-1 text-center items-center'>
          <h1 className='text-3xl font-bold text-gray-900'>Create your profile</h1>
          <p>Create an account to showcase your professional profile and enhance your chances of getting hired.</p>
          <FormSteps />
        </div>
        <FirstFormStep />
        <SecondFormStep />
        <ThirdFormStep />
        <FourthFormStep />
      </form>
    </div>
  )
}
