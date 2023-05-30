import { storage } from '@/database/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const useFirestorage = () => {
  const uploadImage = async (file: File, userUID: string) => {
    const fileRef = ref(storage, userUID)

    try {
      await uploadBytes(fileRef, file)
    } catch (error) {
      console.log(error)
    }
  }

  const getImageURL = async (userUID: string) => {
    const fileRef = ref(storage, userUID)
    const url = await getDownloadURL(fileRef)
    return url
  }

  return { uploadImage, getImageURL }
}
