import { Contract, JobModality, Status, Workday } from './types'

export interface EmployerFilters {
  modality: JobModality
  contract: Contract
  workday: Workday
  status: Status
}
