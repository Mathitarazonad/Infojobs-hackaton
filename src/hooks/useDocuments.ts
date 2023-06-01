import { DocumentsContext, DocumentsContextValues } from '@/contexts/DocumentsContext'
import { useContext } from 'react'
import { DocumentType } from './useFirestore'
import { JobSeeker } from '@/types/types'
import { EmployerFilters } from '@/types/filterTypes'

export const useDocuments = () => {
  const { setDocuments, documents, initialDocuments } = useContext(DocumentsContext) as DocumentsContextValues

  const restartDocuments = () => {
    setDocuments(initialDocuments)
  }

  const replaceDocuments = (documents: DocumentType[]) => {
    setDocuments([...documents])
  }

  const getDocumentsFiltered = async (filters: EmployerFilters, docs: JobSeeker[]) => {
    const { contract, status, modality, workday } = filters
    let docsFiltered = [...docs]

    if (contract !== 'any' && contract !== '') {
      docsFiltered = docsFiltered.filter(doc => doc.desiredContract === contract)
    }
    if (status !== '') {
      docsFiltered = docsFiltered.filter(doc => doc.status === status)
    }
    if (modality !== 'any' && modality !== '') {
      docsFiltered = docsFiltered.filter(doc => doc.jobModality === modality)
    }
    if (workday !== 'undefined' && workday !== '') {
      docsFiltered = docsFiltered.filter(doc => doc.workday === workday)
    }

    return docsFiltered
  }

  return {
    restartDocuments,
    replaceDocuments,
    getDocumentsFiltered,
    documents
  }
}
