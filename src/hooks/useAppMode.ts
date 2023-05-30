import { AppModeContext, AppModeContextType } from '@/contexts/AppModeContext'
import { useContext } from 'react'

export const useAppMode = () => {
  const { setAppMode } = useContext(AppModeContext) as AppModeContextType

  const changeToEmployer = () => setAppMode('EMPLOYER')
  const changeToJobSeeker = () => setAppMode('JOB_SEEKER')

  return {
    changeToEmployer,
    changeToJobSeeker
  }
}
