import Head from 'next/head'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Employer InfoJobS',
  description: 'App for the midu\'s hackaton organized with InfoJobs in may of 2023',
  icons: {
    icon: '/images/infojobs.svg'
  }
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel="icon" href="images/infojobs.svg" type='image/svg'/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-gray-100 font-poppins'>
        {children}
      </body>
    </html>
  )
}
