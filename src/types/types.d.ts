export type AppMode = 'EMPLOYER' | 'JOB_SEEKER'

export type JobModality = 'presential' | 'hybrid' | 'remote' | 'any'

export type Contract = 'full-time' | 'fixed-term' | 'any'

export type Workday = 'complete' | 'partial' | 'undefined'

export type Language = 'english' | 'spanish' | 'french' | 'german'

export type Status = 'searching' | 'hired'
export interface PreviousEmployment {
  company: string
  role: string
  time: string
}

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
  phone?: number
}

export interface Employer {
  email: string
  fullname: string
  photoURL: string
}
