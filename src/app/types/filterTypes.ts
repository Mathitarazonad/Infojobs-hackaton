export interface EmployerFilters {
  modality: JobModality
  contract: Contract
  workday: Workday
  languages: Language[]
}

type JobModality = 'presential' | 'hybrid' | 'remote' | 'any'

type Contract = 'full-time' | 'fixed-term' | 'any'

type Workday = 'complete' | 'partial' | 'undefined'

type Language = 'english' | 'spanish' | 'french' | 'german'
