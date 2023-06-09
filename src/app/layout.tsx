import AppModeProvider from '@/contexts/AppModeContext'
import FilterProvider from '../contexts/FilterContext'
import './globals.css'
import { Poppins } from 'next/font/google'
import AuthProvider from '@/contexts/AuthContext'
import DocumentsProvider from '@/contexts/DocumentsContext'

export const metadata = {
  title: 'Employer InfoJobs',
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
        <AppModeProvider>
          <AuthProvider>
            <DocumentsProvider>
              <FilterProvider>
                {children}
              </FilterProvider>
            </DocumentsProvider>
          </AuthProvider>
        </AppModeProvider>
      </body>
    </html>
  )
}
