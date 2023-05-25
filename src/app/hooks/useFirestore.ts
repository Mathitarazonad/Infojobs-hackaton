import { db } from '../database/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { JobSeeker } from '../types/seekersTypes'

export const useFirestore = () => {
  const getAllDocuments = async (collectionType: 'jobs' | 'jobSeekerList'): Promise<JobSeeker[]> => {
    const collectionRef = collection(db, collectionType)
    const querySnapshot = await getDocs(collectionRef)
    const documents: JobSeeker[] = []
    querySnapshot.forEach(doc => documents.push(doc.data() as JobSeeker))

    return documents
  }

  return { getAllDocuments }
}
