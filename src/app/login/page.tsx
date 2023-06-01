/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Ring } from '@uiball/loaders'
import InputField from '@/components/register/InputField'
import { EmployerRegisterValues, FieldValuesTypes, useForm } from '@/hooks/useForm'
import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'
import { useAppMode } from '@/hooks/useAppMode'
import Link from 'next/link'
import { useState } from 'react'

const initialFieldValues = {
  email: '',
  password: ''
}

export default function Page () {
  const { fieldErrors, updateFieldErrors, updateStepFields, checkErrors, handleAuthErrors } = useForm(initialFieldValues)
  const { signIn } = useAuth()
  const { changeToEmployer } = useAppMode()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    if (await checkErrors(true)) {
      setIsSubmitting(false)
      return
    }

    changeToEmployer()
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())
    const documentToAdd = { ...formValues, uid: uuid() } as EmployerRegisterValues

    const sign = await signIn(documentToAdd.email, documentToAdd.password as string)
    if (sign !== null) {
      setIsSubmitting(false)
      handleAuthErrors(sign)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    updateStepFields(field as keyof FieldValuesTypes, fieldValue)
    updateFieldErrors(field as keyof FieldValuesTypes, '')
  }

  return (
    <div className='flex justify-center items-center p-5 min-h-screen'>
      <form className='flex flex-col items-center gap-5 w-full max-w-md bg-white drop-shadow-lg p-4' onSubmit={async (e) => await handleSubmit(e)}>
        <Image src='/images/infojobsLogo.svg' width={100} height={100} alt='Infojobs Logo' />
        <div className='flex flex-col gap-1 text-center items-center'>
          <h1 className='text-3xl font-bold text-gray-900'>Sign In</h1>
          <div className='text-sm'>
            You don't have an account yet?
            <Link href='/register/employer' className='underline ml-1 font-semibold'>Register</Link>
          </div>
        </div>
        <div className='w-full flex flex-col gap-5'>
          <InputField labelText='Email' placeholder='Enter your email' id='email' inputType='email' handleChange={handleChange} errors={fieldErrors} />
          <InputField labelText='Password' placeholder='Enter your password' id='password' inputType='password' handleChange={handleChange} errors={fieldErrors} />
        </div>
        {isSubmitting
          ? <span className='py-[6px] px-4 bg-sky-600 text-white flex items-center gap-1'>Loading<Ring color='white' size={16} /></span>
          : <button type='submit' className='blue_button !px-4'>Sign in</button>}
      </form>
    </div>
  )
}
