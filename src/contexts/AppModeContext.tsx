'use client'
import { AppMode } from '@/types/types'
import { createContext, useState } from 'react'

export interface AppModeContextType {
  appMode: AppMode
  setAppMode: React.Dispatch<React.SetStateAction<AppMode>>
}

export const AppModeContext = createContext<AppModeContextType | null>(null)

export default function AppModeProvider ({ children }: { children: React.ReactNode }) {
  const [appMode, setAppMode] = useState<AppMode>('EMPLOYER')

  const values = { appMode, setAppMode }

  return (
    <AppModeContext.Provider value={values}>
      {children}
    </AppModeContext.Provider>
  )
}
