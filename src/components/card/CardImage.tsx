/* eslint-disable @next/next/no-img-element */
export default function CardImage ({ src }: { src: string }) {
  return (
    <img src={src !== '' ? src : 'images/defaultProfilePhoto.svg'} className='rounded-full w-[45px] min-w-[45px] h-[45px] md:w-[55px] md:min-w-[55px] md:h-[55px] lg:w-[65px] lg:min-w-[65px] lg:h-[65px] bg-white object-cover' alt='alt' />
  )
}
