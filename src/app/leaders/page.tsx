import type { Metadata } from 'next'

import Leaders from '@/app/leaders/sections/Leaders/Leaders'

export const metadata: Metadata = {
  title: "Russia Leaders",
  description: "Project...",
}

export default function LeadersPage() {
  return (
    <div>
      <Leaders />
    </div>
  )
}
