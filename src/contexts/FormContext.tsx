'use client'
import { createContext, useState } from 'react'

export interface FormContextType {
  formStep: number
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  ableToSubmit: boolean
  setAbleToSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export const FormContext = createContext<FormContextType | null>(null)

export default function FormProvider ({ children }: { children: React.ReactNode }) {
  const [formStep, setFormStep] = useState(0)
  const [ableToSubmit, setAbleToSubmit] = useState(false)

  const values = { formStep, setFormStep, ableToSubmit, setAbleToSubmit }

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  )
}
