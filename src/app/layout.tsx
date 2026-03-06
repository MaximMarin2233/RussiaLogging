import './normalize.css'
import './globals.scss'

import LayoutClient from './LayoutClient'
import { getUser } from '@/lib/getUser'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser()

  return (
    <html lang="en">
      <body>
        <LayoutClient user={user}>{children}</LayoutClient>
      </body>
    </html>
  )
}