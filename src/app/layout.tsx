'use client'

import './normalize.css'
import './globals.scss'
import { usePathname } from 'next/navigation'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ServerProvider } from '@/context/ServerContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const isAuthPage = pathname === '/login'

  return (
    <html lang="en">
      <body>
        <ServerProvider>

          {!isAuthPage && <Header />}

          {children}

          {!isAuthPage && <Footer />}

        </ServerProvider>
      </body>
    </html>
  )
}