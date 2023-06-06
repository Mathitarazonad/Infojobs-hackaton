import { AppModeContext, AppModeContextType } from '@/contexts/AppModeContext'
import { AppMode } from '@/types/types'
import { useContext } from 'react'

export const useAppMode = () => {
  const { setAppMode } = useContext(AppModeContext) as AppModeContextType

  const changeAppMode = (type: AppMode) => {
    setAppMode(type)
  }

  return {
    changeAppMode
  }
}
