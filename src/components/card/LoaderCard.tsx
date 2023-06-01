import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <div className='p-4'>
    <ContentLoader
      speed={0.5}
      width={400}
      height={180}
      viewBox='0 0 400 180'
      backgroundColor='#E0E2E2'
      foregroundColor='gray'
    >
      <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
      <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
      <rect x='44' y='50' rx='3' ry='3' width='410' height='6' />
      <rect x='44' y='66' rx='3' ry='3' width='380' height='6' />
      <rect x='44' y='82' rx='3' ry='3' width='178' height='6' />
      <circle cx='20' cy='20' r='20' />
    </ContentLoader>

  </div>
)

export default MyLoader
