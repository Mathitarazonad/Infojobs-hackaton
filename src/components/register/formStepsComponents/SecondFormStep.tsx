/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import { FieldValuesTypes, useForm } from '@/hooks/useForm'
import InputField from '../InputField'
import AvatarInput from '../AvatarInput'

const initialFieldValues = {
  description: '',
  role: '',
  age: '',
  city: '',
}

export default function SecondFormStep () {
  const { groupClass, fieldErrors, checkErrors, updateFieldErrors, updateStepFields, goBackStep } = useForm(initialFieldValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    updateStepFields(field as keyof FieldValuesTypes, fieldValue)
    updateFieldErrors(field as keyof FieldValuesTypes, '')
  }

  return (
    <div className={groupClass(1)}>
      <AvatarInput />
      <InputField labelText='Enter a description about you' placeholder='Talented designer actively seeking job opportunities. Adept at crafting visually captivating and user-centered experiences...' id='description' inputType='textarea' errors={fieldErrors} handleChange={handleChange} />
      <InputField labelText='Role' placeholder='Enter your role' id='role' errors={fieldErrors} handleChange={handleChange} />
      <InputField labelText='Age' placeholder='Enter your age' id='age' inputType='number' errors={fieldErrors} handleChange={handleChange} />
      <InputField labelText='City' placeholder='Enter your city' id='city' errors={fieldErrors} handleChange={handleChange} />
      <div className='grid grid-cols-2 w-full gap-5'>
        <button type='button' className='blue_button' onClick={() => goBackStep()}>
          Back
        </button>
        <button type='button' className='blue_button' onClick={() => checkErrors()}>
          Next
        </button>
      </div>
    </div>
  )
}
