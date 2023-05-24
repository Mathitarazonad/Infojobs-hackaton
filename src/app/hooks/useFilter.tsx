import { useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'
import { EmployerFilters } from '../types/filterTypes'

export const useFilter = () => {
  const { filterValues, filterOpen, setFilterValues, setFilterOpen } = useContext(FilterContext)

  const changeFilterState = () => {
    setFilterOpen(prev => !prev)
  }

  const updateFilterValues = <T extends keyof EmployerFilters>(property: T, value: EmployerFilters[T]) => {
    setFilterValues(prev => {
      const newFilterValues = prev
      newFilterValues[property] = value
      return newFilterValues
    })
  }

  return {
    filterValues,
    filterOpen,
    changeFilterState,
    updateFilterValues,
  }
}
