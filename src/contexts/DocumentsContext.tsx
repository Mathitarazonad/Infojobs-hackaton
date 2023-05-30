'use client'
import { DocumentType, useFirestore } from '@/hooks/useFirestore'
import { JobSeeker } from '@/types/types'
import { Dispatch, SetStateAction, createContext, useState, useEffect } from 'react'

export interface DocumentsContextValues {
  initialDocuments: DocumentType[]
  documents: DocumentType[]
  setDocuments: Dispatch<SetStateAction<DocumentType[]>>
}

export const DocumentsContext = createContext<DocumentsContextValues | null>(null)

export default function DocumentsProvider ({ children }: { children: React.ReactNode }) {
  const [initialDocuments, setInitialDocuments] = useState<DocumentType[]>([])
  const [documents, setDocuments] = useState<DocumentType[]>([])
  const { getAllDocuments } = useFirestore()

  const values = { documents, setDocuments, initialDocuments }

  useEffect(() => {
    getAllDocuments('jobSeekerList')
      .then(all => {
        setDocuments(all as JobSeeker[])
        setInitialDocuments(all as JobSeeker[])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <DocumentsContext.Provider value={values}>
      {children}
    </DocumentsContext.Provider>
  )
}
