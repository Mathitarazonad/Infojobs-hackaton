import Header from '@/components/Header'
import EmployeeList from '@/components/card/JobSeekersList'
import Search from '@/components/search/Search'
import MobileFilterButton from '@/components/sidebar/MobileFilterButton'
import Sidebar from '@/components/sidebar/Sidebar'

export default function Home () {
  return (
    <>
      <Header />
      <main className='pt-[52px] md:flex flex-col justify-center md:pt-[82px] md:px-[50px] lg:px-[200px]'>
        <section className='w-full home_background h-[200px] flex items-center justify-center md:rounded-lg'>
          <Search />
        </section>
        <div className='flex flex-col md:flex-row p-5 md:py-5 md:px-0 relative gap-3 md:gap-5'>
          <MobileFilterButton />
          <Sidebar />
          <EmployeeList />
        </div>
      </main>
    </>
  )
}
