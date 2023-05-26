import { Contract, JobModality, Language, PreviousEmployment, Status, Workday } from './types'

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
  status: Status
  role: string
  cvlink?: string
  yearsOfExperience: number
  email: string
  previousEmployments?: PreviousEmployment[]
  phone: number
}
