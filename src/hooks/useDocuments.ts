import { DocumentsContext, DocumentsContextValues } from '@/contexts/DocumentsContext'
import { useContext } from 'react'
import { DocumentType } from './useFirestore'

export const useDocuments = () => {
  const { setDocuments, documents, initialDocuments } = useContext(DocumentsContext) as DocumentsContextValues

  const restartDocuments = () => {
    setDocuments(initialDocuments)
  }

  const replaceDocuments = (documents: DocumentType[]) => {
    setDocuments([...documents])
  }

  return {
    restartDocuments,
    replaceDocuments,
    documents
  }
}
