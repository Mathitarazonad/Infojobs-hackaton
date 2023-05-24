'use client'
import { Context, Dispatch, SetStateAction, createContext, useState } from 'react'
import { EmployerFilters } from '../types/filterTypes'

interface FilterContextTypes {
  filterValues: EmployerFilters
  filterOpen: boolean
  setFilterValues: Dispatch<SetStateAction<EmployerFilters>>
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

const initialValue: EmployerFilters = {
  modality: 'any',
  contract: 'any',
  workday: 'undefined',
  languages: []
}

export const FilterContext: Context<FilterContextTypes> = createContext()

export default function FilterProvider ({ children }: { children: React.ReactNode }) {
  const [filterValues, setFilterValues] = useState<EmployerFilters>(initialValue)
  const [filterOpen, setFilterOpen] = useState<boolean>(false)

  const values = {
    filterValues,
    filterOpen,
    setFilterValues,
    setFilterOpen,
  }

  return (
    <FilterContext.Provider value={values}>
      {children}
    </FilterContext.Provider>
  )
}
