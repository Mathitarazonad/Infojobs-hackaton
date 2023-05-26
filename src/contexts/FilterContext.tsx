'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { EmployerFilters } from '../types/filterTypes'

export interface FilterContextTypes {
  filterValues: EmployerFilters
  setFilterValues: Dispatch<SetStateAction<EmployerFilters>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

const initialFilterValues: EmployerFilters = {
  modality: 'any',
  contract: 'any',
  workday: 'undefined',
  languages: [],
  status: 'searching'
}

const useValues = () => {
  const [filterValues, setFilterValues] = useState(initialFilterValues)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    {
      filterValues,
      setFilterValues,
      filterOpen,
      setFilterOpen
    }
  )
}

export const FilterContext = createContext<FilterContextTypes | null>(null)

export default function FilterProvider ({ children }: { children: React.ReactNode }) {
  return (
    <FilterContext.Provider value={useValues()}>
      {children}
    </FilterContext.Provider>
  )
}
