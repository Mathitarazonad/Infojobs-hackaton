import { useContext } from 'react'
import { FilterContext, FilterContextTypes } from '../contexts/FilterContext'
import { EmployerFilters } from '../types/filterTypes'

export const useFilter = () => {
  const { filterValues, filterOpen, setFilterValues, setFilterOpen, needToFilter, setNeedToFilter } = useContext(FilterContext as React.Context<FilterContextTypes>)

  const checkForCheckedStyles = <K extends keyof EmployerFilters>(filterType: K, filterValue: EmployerFilters[K]): string => {
    return filterValues[filterType] === filterValue ? ' text-sky-600' : ''
  }

  const changeFilterState = () => {
    setFilterOpen(prev => !prev)
  }

  const updateFilterValues = <T extends keyof EmployerFilters>(property: T, value: EmployerFilters[T]) => {
    setNeedToFilter(true)
    setFilterValues(prev => ({ ...prev, [property]: value }))
  }

  const clearFilter = () => {
    setFilterValues({
      modality: '',
      contract: '',
      workday: '',
      status: ''
    })
  }

  return {
    filterValues,
    filterOpen,
    changeFilterState,
    updateFilterValues,
    checkForCheckedStyles,
    needToFilter,
    clearFilter
  }
}
