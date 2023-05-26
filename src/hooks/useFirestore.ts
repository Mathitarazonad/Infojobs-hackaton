import { db } from '../database/firebase'
import { getDocs, collection, setDoc, doc, addDoc } from 'firebase/firestore'
import { JobSeeker } from '@/types/types.d.js'

type CollectionType = 'jobs' | 'jobSeekerList'

export const useFirestore = () => {
  const getAllDocuments = async (collectionType: CollectionType): Promise<JobSeeker[]> => {
    const collectionRef = collection(db, collectionType)
    const querySnapshot = await getDocs(collectionRef)
    const documents: JobSeeker[] = []
    querySnapshot.forEach(doc => documents.push(doc.data() as JobSeeker))

    return documents
  }

  const addDocument = async (collectionType: CollectionType, document: JobSeeker) => {
    const collectionRef = collection(db, `${collectionType}`)
    await addDoc(collectionRef, document)
  }

  return { getAllDocuments, addDocument }
}
