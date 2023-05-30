import FormProvider from '@/contexts/FormContext'
import React from 'react'

export default function Layout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FormProvider>
      {children}
    </FormProvider>
  )
}
