import { useState } from 'react'

export const useRadio = () => {
  const [selectedInput, setSelectedInput] = useState<number>(-1)

  const changeSelectedInput = (value: number) => {
    setSelectedInput(value)
  }

  const checkForCheckedStyles = (value: number, selectedInput: number): string => {
    return value === selectedInput ? ' text-sky-600' : ''
  }

  return { selectedInput, changeSelectedInput, checkForCheckedStyles }
}
