import { FormContext, FormContextType } from '@/contexts/FormContext'
import { useContext, useState } from 'react'
import { useFirestore } from './useFirestore'
import { ErrorMessages, ErrorsType } from '@/types/errorTypes'
import { Employer, JobSeeker } from '@/types/types'

export type FormUpdateType = 'next' | 'previous'

export interface EmployerRegisterValues extends Employer {
  password?: string
}

export interface JobSeekerRegisterValues extends JobSeeker {
  password?: string
  company?: string
  employmentRole?: string
  time?: string
}

interface FirstFormStepTypes {
  fullname: string
  email: string
  password: string
}

interface SecondFormStepTypes {
  description: string
  role: string
  age: string
  city: string
}

interface ThirdFormStepTypes {
  jobModality: string
  contract: string
  workday: string
  experienceYears: string
}

interface FourthFormStepTypes {
  phone: string
}

type RegisterTypes = FirstFormStepTypes | SecondFormStepTypes | ThirdFormStepTypes | FourthFormStepTypes | EmployerRegisterValues
interface LoginTypes {
  email: string
  password: string
}

export type FieldValuesTypes = RegisterTypes | LoginTypes

export const useForm = (initialFieldValues: FieldValuesTypes) => {
  const { formStep, setFormStep, setAbleToSubmit, ableToSubmit } = useContext(FormContext) as FormContextType
  const { checkIfEmailAlreadyExists } = useFirestore()
  const [fieldValues, setFieldValues] = useState(initialFieldValues)
  const [fieldErrors, setFieldErrors] = useState(Object.fromEntries(
    Object.entries(initialFieldValues).map(([key, value]) => [key, ''])
  ))

  const defaultInputGroupClass = 'w-full flex flex-col items-center gap-5'

  const updateStepFields = <K extends keyof FieldValuesTypes>(field: K, value: string) => {
    setFieldValues(prev => ({ ...prev, [field]: value }))
  }

  const updateFieldErrors = <K extends keyof FieldValuesTypes>(field: K, error: ErrorMessages[ErrorsType]) => {
    setFieldErrors(prev => ({ ...prev, [field]: error }))
  }

  const goBackStep = () => {
    setFormStep(prev => prev - 1)
  }

  const goNextStep = () => {
    setFormStep(prev => prev + 1)
  }

  const groupClass = (group: number) => {
    if (group === formStep) {
      return defaultInputGroupClass
    }

    return 'hidden'
  }

  // Validations
  const isEmpty = (value: string) => value === ''
  const errorMessages: ErrorMessages = {
    EmptyField: 'Field cannot be empty',
    PasswordTooShort: 'Password must be at least 6 characters long',
    EmailAlreadyInUse: 'Email is already in use',
    InvalidEmail: 'Email is not valid',
    WrongPassword: 'Password is wrong'
  }

  const checkErrors = async (isLogin = false) => {
    let isAnyError = false

    const emailIsValid = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
    // First Form Step
    if ('password' in fieldValues) {
      const passwordType = 'password' as keyof FieldValuesTypes
      const passwordValue = fieldValues.password
      if (passwordValue !== undefined) {
        if (passwordValue.length < 6) {
          updateFieldErrors(passwordType, errorMessages.PasswordTooShort)
          isAnyError = true
        }
        if (isEmpty(passwordValue)) {
          updateFieldErrors(passwordType, errorMessages.EmptyField)
          isAnyError = true
        }
      }
    }
    if ('fullname' in fieldValues && fieldValues.fullname === '') {
      updateFieldErrors('fullname' as keyof FieldValuesTypes, errorMessages.EmptyField)
      isAnyError = true
    }
    if ('email' in fieldValues) {
      const emailType = 'email' as keyof FieldValuesTypes
      const emailValue = fieldValues.email
      if (isEmpty(emailValue)) {
        updateFieldErrors(emailType, errorMessages.EmptyField)
        isAnyError = true
      } else if (!emailIsValid(emailValue)) {
        updateFieldErrors(emailType, errorMessages.InvalidEmail)
        isAnyError = true
      }

      if (await checkIfEmailAlreadyExists(emailValue) && !isLogin) {
        updateFieldErrors(emailType, errorMessages.EmailAlreadyInUse)
        isAnyError = true
      }
    }
    // Second Form Step
    if ('description' in fieldValues) {
      const descriptionType = 'description'
      const description = fieldValues.description
      if (isEmpty(description)) {
        updateFieldErrors(descriptionType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }
    if ('role' in fieldValues) {
      const roleType = 'role'
      const role = fieldValues.role
      if (isEmpty(role)) {
        updateFieldErrors(roleType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }
    if ('city' in fieldValues) {
      const cityType = 'city'
      const city = fieldValues.city
      if (isEmpty(city)) {
        updateFieldErrors(cityType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }
    if ('age' in fieldValues) {
      const ageType = 'age'
      const age = fieldValues.age
      if (isEmpty(age)) {
        updateFieldErrors(ageType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }

    // Third Form Step
    if ('experienceYears' in fieldValues) {
      const experienceYearsType = 'experienceYears'
      const experienceYears = fieldValues.experienceYears
      if (isEmpty(experienceYears)) {
        updateFieldErrors(experienceYearsType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }

    // Fourth Form Step
    if ('phone' in fieldValues) {
      const phoneType = 'phone'
      const phone = fieldValues.phone
      if (isEmpty(phone)) {
        updateFieldErrors(phoneType as keyof FieldValuesTypes, errorMessages.EmptyField)
        isAnyError = true
      }
    }

    if (!isAnyError) {
      if (formStep !== 3) {
        goNextStep()
      }
      setAbleToSubmit(true)
    } else {
      setAbleToSubmit(false)
    }
  }

  const handleAuthErrors = (authError: string) => {
    if (authError === 'auth/user-not-found') {
      updateFieldErrors('email' as keyof FieldValuesTypes, 'Email is not valid')
    }
    if (authError === 'auth/wrong-password') {
      updateFieldErrors('password' as keyof FieldValuesTypes, 'Password is wrong')
    }
    if (authError === 'auth/too-many-requests') {
      updateFieldErrors('email' as keyof FieldValuesTypes, 'Too many tries')
      updateFieldErrors('password' as keyof FieldValuesTypes, 'Too many tries')
    }
  }

  return {
    defaultInputGroupClass,
    formStep,
    goBackStep,
    groupClass,
    updateStepFields,
    fieldValues,
    fieldErrors,
    updateFieldErrors,
    checkErrors,
    handleAuthErrors,
    ableToSubmit
  }
}
