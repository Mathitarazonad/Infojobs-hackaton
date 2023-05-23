import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Employer InfoJobS',
  description: 'App for the midu\'s hackaton organized with InfoJobs in may of 2023',
  icons: {
    icon: '/images/infojobsLogo.svg'
  }
}

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '300', '400', '600', '700', '800']
})

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable}` + ' bg-gray-100 font-poppins'}>
        {children}
      </body>
    </html>
  )
}
