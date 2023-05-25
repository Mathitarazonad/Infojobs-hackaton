import { Contract, JobModality, Language, Workday } from './types'

export interface JobSeeker {
  uid: string
  fullname: string
  age: number
  description: string
  technologies: string[]
  photoURL: string
  languages: Language[]
  city: string
  jobModality: JobModality
  desiredContract: Contract
  workday: Workday
  isSearchingJob: boolean
  role: string
  cvlink?: string
  yearsOfExperience: number
  email: string
  previousEmployments?: PreviousEmployment[]
  phone: number
}

interface PreviousEmployment {
  company: string
  role: string
  time: string
}
