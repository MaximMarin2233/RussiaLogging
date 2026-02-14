import './normalize.css'
import './globals.scss'
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import { ServerProvider } from '@/context/ServerContext'

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ServerProvider>
          <Header />
          {children}
          <Footer />
        </ServerProvider>
      </body>
    </html>
  )
}
