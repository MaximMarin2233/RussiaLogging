'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ServerProvider } from '@/context/ServerContext'

interface LayoutClientProps {
  children: React.ReactNode
  user: any
}

export default function LayoutClient({ children, user }: LayoutClientProps) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login'

  return (
    <ServerProvider>
      {!isAuthPage && <Header user={user} />}
      {children}
      {!isAuthPage && <Footer />}
    </ServerProvider>
  )
}