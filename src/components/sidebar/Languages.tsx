export default function Languages () {
  return (
    <section className='flex flex-col gap-[2px]'>
      <h4 className='text-lg'>Languages</h4>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' className='' name='languages' value='spanish' id='spanish' />
        <label className='text-sm' htmlFor='spanish'>Spanish</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' className='' name='languages' value='english' id='english' />
        <label className='text-sm' htmlFor='english'>English</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' className='' name='languages' value='german' id='german' />
        <label className='text-sm' htmlFor='german'>German</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' className='' name='languages' value='french' id='french' />
        <label className='text-sm' htmlFor='french'>French</label>
      </div>
    </section>
  )
}
