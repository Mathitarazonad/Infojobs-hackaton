/* eslint-disable @typescript-eslint/no-misused-promises */
interface Props {
  labelText: string
  placeholder: string
  id: string
  inputType?: 'email' | 'password' | 'text' | 'textarea' | 'number' | 'url'
  isRequired?: boolean
  errors: any
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function InputField ({ labelText, placeholder, id, inputType = 'text', errors, handleChange }: Props) {
  const getInputStyle = (field: any) => {
    const inputClass = 'border-b-[2px] border-gray-300 p-[6px] outline-none text-gray-700 autofill:shadow-autofill-without-bg resize-none'
    const errorStyles = ' border-red-400'

    if (errors[field] !== '' && errors[field] !== undefined) {
      return inputClass + errorStyles
    }

    return inputClass
  }

  return (
    <div className='flex flex-col gap-1 w-full min-h-[75px] text relative'>
      <div>
        <label htmlFor={id}>{labelText}</label>
      </div>
      {inputType === 'textarea'
        ? <textarea placeholder={placeholder} id={id} rows={3} name={id} className={getInputStyle(id)} onChange={handleChange} />
        : <input placeholder={placeholder} id={id} type={inputType} name={id} className={getInputStyle(id)} onChange={handleChange} />}
      {errors[id] !== '' && <p className={'text-red-600 text-sm absolute' + (inputType === 'textarea' ? ' bottom-[-22px]' : 'bottom-[-15px]')}>{errors[id]}</p>}
    </div>
  )
}
