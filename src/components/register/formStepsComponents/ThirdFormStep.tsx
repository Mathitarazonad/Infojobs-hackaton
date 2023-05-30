/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { FieldValuesTypes, useForm } from '@/hooks/useForm'
import InputField from '../InputField'

const initialFieldValues = {
  experienceYears: '',
  jobModality: 'presential',
  workday: 'complete',
  desiredContract: 'full-time'
}

export default function ThirdFormStep () {
  const { groupClass, fieldErrors, checkErrors, updateFieldErrors, updateStepFields, goBackStep } = useForm(initialFieldValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    updateStepFields(field as keyof FieldValuesTypes, fieldValue)
    updateFieldErrors(field as keyof FieldValuesTypes, '')
  }

  return (
    <div className={groupClass(2)}>
      <InputField labelText='Years of Experience' placeholder='Enter your years of experience' id='experienceYears' inputType='number' handleChange={handleChange} errors={fieldErrors} />
      <div className='w-full flex flex-col gap-5 items-start'>
        <div>
          <p>How do you want to work?</p>
          <div className='flex gap-1'>
            <input type='radio' value='presential' id='presential' name='jobModality' onChange={(e) => handleChange(e)} />
            <label htmlFor='presential'>Presential (default)</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='hybrid' id='hybrid' name='jobModality' onChange={(e) => handleChange(e)} />
            <label htmlFor='hybrid'>Hybrid</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='remote' id='remote' name='jobModality' onChange={(e) => handleChange(e)} />
            <label htmlFor='remote'>Remote</label>
          </div>
        </div>
        <div>
          <p>Select your pretended workday</p>
          <div className='flex gap-1'>
            <input type='radio' value='complete' id='complete' name='workday' onChange={(e) => handleChange(e)} />
            <label htmlFor='complete'>Complete (default)</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='partial' id='partial' name='workday' onChange={(e) => handleChange(e)} />
            <label htmlFor='partial'>Partial</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='undefined' id='undefined' name='workday' onChange={(e) => handleChange(e)} />
            <label htmlFor='undefined'>Undefined</label>
          </div>
        </div>
        <div>
          <p>What type of contract would you like to have?</p>
          <div className='flex gap-1'>
            <input type='radio' value='full-time' id='full-time' name='desiredContract' onChange={(e) => handleChange(e)} />
            <label htmlFor='full-time'>Full-time (default)</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='fixed-term' id='fixed-term' name='desiredContract' onChange={(e) => handleChange(e)} />
            <label htmlFor='fixed-term'>Fixed-term</label>
          </div>
          <div className='flex gap-1'>
            <input type='radio' value='any' id='any' name='desiredContract' onChange={(e) => handleChange(e)} />
            <label htmlFor='any'>Any</label>
          </div>
        </div>
      </div>
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
