import { Contract, JobModality, Language, Status, Workday } from './types'

export interface EmployerFilters {
  modality: JobModality
  contract: Contract
  workday: Workday
  languages: Language[]
  status: Status
}
