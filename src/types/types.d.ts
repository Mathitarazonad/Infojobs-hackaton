export type AppMode = 'EMPLOYER' | 'JOB_SEEKER'

export type JobModality = 'presential' | 'hybrid' | 'remote' | 'any' | ''

export type Contract = 'full-time' | 'fixed-term' | 'any' | ''

export type Workday = 'complete' | 'partial' | 'undefined' | ''

export type Status = 'searching' | 'hired' | ''

export interface PreviousEmployment {
  company: string
  employmentRole: string
  time: string
}

export interface JobSeeker {
  uid: string
  fullname: string
  age: number
  description: string
  technologies: string[] | string
  photoURL: string | File
  city: string
  jobModality: JobModality
  desiredContract: Contract
  workday: Workday
  status: Status
  role: string
  cvlink?: string
  experienceYears: number
  email: string
  previousEmployments: PreviousEmployment[] | string
  phone: number
  userType: AppMode
}

export interface Employer {
  uid: string
  email: string
  fullname: string
  photoURL: string | File
  userType: AppMode
}
