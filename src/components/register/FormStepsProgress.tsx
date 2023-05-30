'use client'
import { FormContext, FormContextType } from '@/contexts/FormContext'
import { useContext } from 'react'

export default function FormStepsProgress () {
  const { formStep } = useContext(FormContext) as FormContextType

  const getStepStyle = (index: number): string => {
    if (index <= formStep) return ' border-sky-600'
    return ''
  }

  const defaulStepStyles = 'border-b-2 border-gray-400 flex-1 text-center duration-500'

  return (
    <ol className='flex gap-2 w-full max-w-[325px]'>
      <li className={defaulStepStyles + getStepStyle(0)}>1</li>
      <li className={defaulStepStyles + getStepStyle(1)}>2</li>
      <li className={defaulStepStyles + getStepStyle(2)}>3</li>
      <li className={defaulStepStyles + getStepStyle(3)}>4</li>
    </ol>
  )
}
