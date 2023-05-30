import { useContext, useState } from 'react'
import { FilterContext, FilterContextTypes } from '../contexts/FilterContext'
import { EmployerFilters } from '../types/filterTypes'

export const useFilter = () => {
  const { filterValues, filterOpen, setFilterValues, setFilterOpen } = useContext(FilterContext as React.Context<FilterContextTypes>)
  const [selectedInput, setSelectedInput] = useState<number>(-1)

  const changeSelectedInput = (value: number) => {
    setSelectedInput(value)
  }

  const checkForCheckedStyles = (value: number, selectedInput: number): string => {
    return value === selectedInput ? ' text-sky-600' : ''
  }

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
    selectedInput,
    changeSelectedInput,
    checkForCheckedStyles
  }
}
