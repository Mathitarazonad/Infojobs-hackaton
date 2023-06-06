import Header from '@/components/header/Header'
import JobSeekerList from '@/components/jobSeekers/JobSeekerList'
import Search from '@/components/search/Search'
import MobileFilterButton from '@/components/sidebar/MobileFilterButton'
import Sidebar from '@/components/sidebar/Sidebar'
import AuthProtect from '@/contexts/AuthProtect'

export default function Home () {
  return (
    <AuthProtect>
      <Header />
      <main className='pt-[52px] md:flex flex-col justify-center md:pt-[82px] app_paddings'>
        <section className='w-full home_background h-[200px] flex items-center justify-center md:rounded-lg'>
          <Search />
        </section>
        <div className='flex flex-col md:flex-row p-4 md:py-5 md:px-0 relative gap-3 md:gap-5'>
          <MobileFilterButton />
          <Sidebar />
          <JobSeekerList />
        </div>
      </main>
    </AuthProtect>
  )
}
