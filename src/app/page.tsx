import Header from '@/components/Header'
import Search from '@/components/search/Search'

export default function Home() {
  return (
    <>
      <Header />
      <main className='pt-[52px] sm:px-[50px] md:flex justify-center md:pt-[82px] lg:px-[200px]'>
        <section className='w-full home_background h-[200px] flex items-center justify-center md:rounded-lg'>
          <Search />
        </section>
      </main>
    </>
  )
}
