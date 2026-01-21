import type { Metadata } from 'next'

import Businesses from '@/app/businesses/sections/Businesses/Businesses'

export const metadata: Metadata = {
  title: "Russia Businesses",
  description: "Project...",
}

export default function BusinessesPage() {
  return (
    <div>
      <Businesses />
    </div>
  )
}
