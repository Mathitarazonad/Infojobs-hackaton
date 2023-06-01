/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { useDocuments } from '@/hooks/useDocuments'
import { useFilter } from '@/hooks/useFilter'
import { useFirestore } from '@/hooks/useFirestore'
import { JobSeeker } from '@/types/types'

export default function Search () {
  const { getAllDocuments } = useFirestore()
  const { replaceDocuments } = useDocuments()
  const { filterValues, needToFilter } = useFilter()
  const { getDocumentsFiltered } = useDocuments()

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())
    const searchForm = { ...formValues }
    let documents: JobSeeker[]

    if (searchForm.search !== '') {
      documents = await getAllDocuments('jobSeekerList', 'role', searchForm.search as string) as JobSeeker[]
    } else {
      documents = await getAllDocuments('jobSeekerList') as JobSeeker[]
    }

    if (needToFilter) {
      documents = await getDocumentsFiltered(filterValues, documents)
    }

    replaceDocuments(documents)
  }

  return (
    <form className='flex flex-col gap-2 p-4 w-full md:max-w-md' onSubmit={handleSearch}>
      <label className='text-white text-3xl md:text-4xl text-center font-medium' htmlFor='search'>Search for something</label>
      <div className='flex gap-3 justify-center'>
        <input type='text' placeholder='e.g. architect' id='search' name='search' autoComplete='off' className='bg-transparent text-white placeholder:text-white border-2 border-white p-2 outline-none w-full' />
        <button type='submit' className='text-white p-2 border-2 border-white hover:bg-white hover:bg-opacity-30 duration-200'>Search</button>
      </div>
    </form>
  )
}
