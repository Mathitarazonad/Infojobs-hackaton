import { db } from '../database/firebase'
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
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
  return { getAllDocuments, addDocument, checkIfEmailAlreadyExists }
}
