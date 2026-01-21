import type { Metadata } from 'next'

import Admins from '@/app/admins/sections/Admins/Admins'

export const metadata: Metadata = {
  title: "Russia Admins",
  description: "Project...",
}

export default function AdminsPage() {
  return (
    <div>
      <Admins />
    </div>
  )
}
