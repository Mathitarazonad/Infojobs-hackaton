/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { FieldValuesTypes, useForm } from '@/hooks/useForm'
import InputField from '../InputField'
import TechnologiesList from '../technologiesField/TechnologiesList'
import Employment from '../employmentsField/Employment'
import { Ring } from '@uiball/loaders'

const initialFieldValues = {
  phone: ''
}

export default function FourthFormStep ({ isSubmitting }: { isSubmitting: boolean }) {
  const { groupClass, fieldErrors, updateFieldErrors, updateStepFields, goBackStep, checkErrors } = useForm(initialFieldValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name
    const fieldValue = e.target.value
    updateStepFields(field as keyof FieldValuesTypes, fieldValue)
    updateFieldErrors(field as keyof FieldValuesTypes, '')
  }

  return (
    <div className={groupClass(3)}>
      <InputField labelText='Phone' placeholder='Enter your phone' id='phone' inputType='text' handleChange={handleChange} errors={fieldErrors} />
      <InputField labelText='Enter you CV link (Optional)' placeholder='example.com/file.pdf' id='cvlink' inputType='url' handleChange={handleChange} errors={fieldErrors} />
      <TechnologiesList />
      <Employment />
      <div className='grid grid-cols-2 w-full gap-5'>
        <button type='button' className='blue_button' onClick={() => goBackStep()}>
          Back
        </button>
        {isSubmitting
          ? <span className='py-[6px] px-4 bg-sky-600 text-white flex justify-center items-center gap-1'>Loading<Ring color='white' size={16} /></span>
          : <button type='submit' className='blue_button' onClick={() => checkErrors()}>Create</button>}
      </div>
    </div>
  )
}
