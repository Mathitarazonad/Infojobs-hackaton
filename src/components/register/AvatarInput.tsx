/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react'
import { FiUpload } from 'react-icons/fi'

export default function AvatarInput () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file !== null) {
      setSelectedFile(file as File)
      previewFile(file as File)
    }
  }

  const previewFile = (file: File) => {
    if (file instanceof File) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className='w-full flex flex-col items-center gap-2'>
      <div className='w-[200px] h-[200px] rounded-full cursor-pointer flex items-center justify-center border-4 border-gray-300 hover:scale-95 duration-300' onClick={() => handleButtonClick()}>
        {previewUrl !== null
          ? <img src={previewUrl} alt='Preview' className='w-full h-full rounded-full object-cover' />
          : <FiUpload className='text-3xl text-gray-400' />}
      </div>
      <input
        type='file'
        accept='image/*'
        className='hidden'
        name='photoURL'
        id='photoURL'
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <label htmlFor='photoURL' className='text-lg font-semibold text-gray-900'>Insert a profile photo (Optional)</label>
    </div>
  )
}
