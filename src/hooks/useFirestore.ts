import { db } from '../database/firebase'
import { getDocs, collection, setDoc, doc, query, where } from 'firebase/firestore'
import { Employer, JobSeeker } from '@/types/types.d.js'

type CollectionType = 'jobOffersList' | 'jobSeekerList' | 'employersList'
type DocumentType = JobSeeker | Employer

export const useFirestore = () => {
  const getAllDocuments = async (collectionType: CollectionType) => {
    const collectionRef = collection(db, collectionType)
    const querySnapshot = await getDocs(collectionRef)

    const documents: DocumentType[] = []
    querySnapshot.forEach(doc => documents.push(doc.data() as DocumentType))

    return documents
  }

  const getDocument = async (collectionType: CollectionType, getBy: string, value?: string): Promise<DocumentType> => {
    const q = query(collection(db, collectionType), where(getBy, '==', value))

    const querySnapshot = await getDocs(q)
    const document = querySnapshot.docs.map((doc) => doc.data())[0] as DocumentType

    return document
  }

  const addDocument = async (collectionType: CollectionType, document: DocumentType, documentUID: string) => {
    const documentRef = doc(db, collectionType, documentUID)
    await setDoc(documentRef, document)
  }

  const checkIfEmailAlreadyExists = async (email: string) => {
    const seekersCollection = collection(db, 'jobSeekerList')
    const employersCollection = collection(db, 'employersList')

    const [jobSeekers, employers] = await Promise.all([
      getDocs(seekersCollection),
      getDocs(employersCollection),
    ])

    const jobSeekerEmails = jobSeekers.docs.map((doc) => doc.data().email)
    const employerEmails = employers.docs.map((doc) => doc.data().email)

    return [...jobSeekerEmails, ...employerEmails].includes(email)
  }
  return { getAllDocuments, addDocument, checkIfEmailAlreadyExists, getDocument }
}
