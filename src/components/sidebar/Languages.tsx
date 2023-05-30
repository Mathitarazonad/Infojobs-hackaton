'use client'
import { useFilter } from '@/hooks/useFilter'
import { Language } from '@/types/types'
import { useState, useEffect } from 'react'

export default function Languages () {
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([])
  const { updateFilterValues } = useFilter()

  function handleLanguageSelection (e: React.ChangeEvent<HTMLInputElement>) {
    const language = e.target.value as Language
    setSelectedLanguages((prevLanguages) => {
      if (prevLanguages.includes(language)) {
        return prevLanguages.filter((lang) => lang !== language)
      } else {
        return [...prevLanguages, language]
      }
    })
  }

  useEffect(() => {
    updateFilterValues('languages', selectedLanguages)
  }, [selectedLanguages])

  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Languages</h4>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' onChange={handleLanguageSelection} className='' name='languages' value='spanish' id='spanish' />
        <label className='text-sm' htmlFor='spanish'>Spanish</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' onChange={handleLanguageSelection} className='' name='languages' value='english' id='english' />
        <label className='text-sm' htmlFor='english'>English</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' onChange={handleLanguageSelection} className='' name='languages' value='german' id='german' />
        <label className='text-sm' htmlFor='german'>German</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' onChange={handleLanguageSelection} className='' name='languages' value='french' id='french' />
        <label className='text-sm' htmlFor='french'>French</label>
      </div>
    </section>
  )
}
