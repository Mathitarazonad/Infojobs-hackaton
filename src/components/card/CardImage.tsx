export default function CardImage ({ src }: { src: string }) {
  return (
    <img src={src} className='rounded-full min-w-[45px] h-[45px] md:min-w-[55px] md:h-[55px] lg:min-w-[65px] lg:h-[65px] bg-white object-cover' alt='alt' />
  )
}
