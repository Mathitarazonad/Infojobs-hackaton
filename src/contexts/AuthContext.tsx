/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { auth } from '@/database/firebase'
import { useFirestore } from '@/hooks/useFirestore'
import { Employer, JobSeeker } from '@/types/types'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useState, useEffect, useContext } from 'react'
import { AppModeContext, AppModeContextType } from './AppModeContext'
import { useRouter } from 'next/navigation'

export interface AuthContextValues {
  currentUser: Employer | JobSeeker | null
  setCurrentUser: React.Dispatch<React.SetStateAction<Employer | JobSeeker | null>>
}

export const AuthContext = createContext<AuthContextValues | null>(null)

export default function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Employer | JobSeeker | null>(null)
  const { appMode } = useContext(AppModeContext) as AppModeContextType
  const { getDocument } = useFirestore()
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        const collectionType = appMode === 'EMPLOYER' ? 'employersList' : 'jobSeekerList'
        const userData = await getDocument(collectionType, 'email', user?.email as string)
        setCurrentUser(userData)
        router.push('/')
      } else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const values = { currentUser, setCurrentUser }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
