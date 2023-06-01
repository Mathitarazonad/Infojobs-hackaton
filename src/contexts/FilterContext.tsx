'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { EmployerFilters } from '../types/filterTypes'

export interface FilterContextTypes {
  filterValues: EmployerFilters
  setFilterValues: Dispatch<SetStateAction<EmployerFilters>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
  needToFilter: boolean
  setNeedToFilter: Dispatch<SetStateAction<boolean>>
}

const initialFilterValues: EmployerFilters = {
  modality: '',
  contract: '',
  workday: '',
  status: ''
}

const useValues = () => {
  const [filterValues, setFilterValues] = useState(initialFilterValues)
  const [filterOpen, setFilterOpen] = useState(false)
  const [needToFilter, setNeedToFilter] = useState(false)

  return (
    {
      filterValues,
      setFilterValues,
      filterOpen,
      setFilterOpen,
      needToFilter,
      setNeedToFilter,
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
