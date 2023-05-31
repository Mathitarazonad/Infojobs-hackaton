/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthProtectProps {
  children: React.ReactNode
  isAuthRoute?: boolean
}

export default function AuthProtect ({ children, isAuthRoute = false }: AuthProtectProps) {
  const { currentUser, userChecked } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthRoute && currentUser) {
      router.push('/')
    } else if (!currentUser && !isAuthRoute) {
      router.push('/welcome')
    }
  }, [userChecked, currentUser])

  // Verificar si el usuario está autenticado y mostrar las rutas protegidas
  if (userChecked && currentUser !== null && currentUser !== undefined && !isAuthRoute) {
    return <>{children}</>
  }

  // Si el usuario no está autenticado, permitir el acceso a rutas de autenticación
  if (userChecked && (currentUser === null || currentUser === undefined) && isAuthRoute) {
    return <>{children}</>
  }

  // Si el usuario aún no ha sido verificado, puedes mostrar un mensaje de carga o redirigirlo a una página de carga.
  return null
}
