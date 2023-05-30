import AuthProtect from '@/contexts/AuthProtect'

export default function layout ({ children }: { children: React.ReactNode }) {
  return (
    <AuthProtect isAuthRoute>
      {children}
    </AuthProtect>
  )
}
