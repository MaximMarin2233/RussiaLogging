import type { Metadata } from 'next'

import Fam from '@/app/fam/sections/Fam/Fam'

export const metadata: Metadata = {
  title: "Russia Fam",
  description: "Project...",
}

export default function FamPage() {
  return (
    <div>
      <Fam />
    </div>
  )
}
