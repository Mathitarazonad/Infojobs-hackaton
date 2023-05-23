import ExamplesLanding from '@/components/welcome/WelcomeExamples';
import Landing from '@/components/welcome/Welcome';
import Header from '@/components/Header';

export default function page() {
  return (
    <>
      <Header />
      <div>
        <Landing />
        <ExamplesLanding />
      </div>
    </>
  )
}
