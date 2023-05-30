import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/database/firebase'
import { useContext } from 'react'
import { AuthContext, AuthContextValues } from '@/contexts/AuthContext'
import { FirestoreError } from 'firebase/firestore'

export const useAuth = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextValues
  const createProfile = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      return true
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return null
    } catch (error) {
      return (error as FirestoreError).code
    }
  }

  const logout = async () => {
    console.log('h')
    await signOut(auth)
  }

  return { createProfile, signIn, logout, currentUser }
}
