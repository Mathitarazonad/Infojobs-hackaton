import ExamplesLanding from '@/components/welcome/WelcomeExamples'
import Landing from '@/components/welcome/Welcome'
import Header from '@/components/header/Header'
import AuthProtect from '@/contexts/AuthProtect'

export default function page () {
  return (
    <AuthProtect isAuthRoute>
      <Header />
      <div>
        <Landing />
        <ExamplesLanding />
      </div>
    </AuthProtect>
  )
}
