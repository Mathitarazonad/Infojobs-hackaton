/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { auth } from '@/database/firebase'
import { useFirestore } from '@/hooks/useFirestore'
import { Employer, JobSeeker } from '@/types/types'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'

export interface AuthContextValues {
  currentUser: Employer | JobSeeker | null
  setCurrentUser: React.Dispatch<React.SetStateAction<Employer | JobSeeker | null>>
  userChecked: boolean
  setUserChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextValues | null>(null)

export default function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Employer | JobSeeker | null>(null)
  const [userChecked, setUserChecked] = useState(false)
  const { getDocument } = useFirestore()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user !== null) {
        const userData = await getDocument('email', undefined, user?.email as string)
        setCurrentUser(userData)
      } else {
        setCurrentUser(null)
      }
      setUserChecked(true)
    })

    return () => unsubscribe()
  }, [])

  const values = { currentUser, setCurrentUser, userChecked, setUserChecked }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
