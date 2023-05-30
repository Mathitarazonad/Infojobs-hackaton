import AuthProtect from '@/contexts/AuthProtect'
import FormProvider from '@/contexts/FormContext'
import React from 'react'

export default function Layout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProtect isAuthRoute>
      <FormProvider>
        {children}
      </FormProvider>
    </AuthProtect>
  )
}
