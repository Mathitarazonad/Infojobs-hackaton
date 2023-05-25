import { Contract, JobModality, Language, Workday } from './types'

export interface EmployerFilters {
  modality: JobModality
  contract: Contract
  workday: Workday
  languages: Language[]
}
