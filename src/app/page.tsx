import type { Metadata } from 'next'

import MainInf from '@/app/sections/MainInf/MainInf'

export const metadata: Metadata = {
  title: "Russia Dashboard",
  description: "Project...",
}

export default function HomePage() {
  return (
    <div>
      <MainInf />
    </div>
  )
}
