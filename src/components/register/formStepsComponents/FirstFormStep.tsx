/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import { FieldValuesTypes, useForm } from '@/hooks/useForm'
import InputField from '../InputField'

export default function FirstFormStep () {
  const initialFieldValues = {
    fullname: '',
    email: '',
    password: '',
  }
  const { groupClass, updateStepFields, updateFieldErrors, fieldErrors, checkErrors } = useForm(initialFieldValues as FieldValuesTypes)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    updateStepFields(field as keyof FieldValuesTypes, fieldValue)
    updateFieldErrors(field as keyof FieldValuesTypes, '')
  }

  return (
    <div className={groupClass(0)}>
      <InputField handleChange={handleChange} id='fullname' labelText='Enter your full name' placeholder='John Smith' errors={fieldErrors} />
      <InputField handleChange={handleChange} id='email' labelText='Enter a valid email' placeholder='example@gmail.com' errors={fieldErrors} inputType='email' />
      <InputField handleChange={handleChange} id='password' labelText='Enter your full name' placeholder='Enter your password' errors={fieldErrors} inputType='password' />
      <div className='w-full'>
        <p>Are you searching for job?</p>
        <div className='flex gap-1'>
          <input type='radio' value='searching' id='searching' name='status' onChange={(e) => handleChange(e)} />
          <label htmlFor='searching'>Yes (default)</label>
        </div>
        <div className='flex gap-1'>
          <input type='radio' value='hired' id='hired' name='status' onChange={(e) => handleChange(e)} />
          <label htmlFor='hired'>No</label>
        </div>
      </div>
      <div className='grid grid-cols-2 w-full gap-5'>
        <button type='button' className='blue_button col-start-2' onClick={() => checkErrors()}>Next</button>
      </div>
    </div>
  )
}
