export default function Search() {
  return (
    <form className='flex flex-col gap-2'>
      <label className='text-white text-3xl md:text-4xl text-center font-medium' htmlFor='search'>Search for something</label>
      <div className='flex gap-3 justify-center'>
        <input type='text' placeholder='e.g. architect' id='search' className='bg-transparent text-white placeholder:text-white border-2 border-white p-2 outline-none w-full' />
        <button type='submit' className='text-white p-2 border-2 border-white hover:bg-white hover:bg-opacity-30 duration-200'>Search</button>
      </div>
    </form>
  )
}
