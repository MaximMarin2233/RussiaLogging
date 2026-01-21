import type { Metadata } from 'next'

import Helpers from '@/app/helpers/sections/Helpers/Helpers'

export const metadata: Metadata = {
  title: "Russia Helpers",
  description: "Project...",
}

export default function HelpersPage() {
  return (
    <div>
      <Helpers />
    </div>
  )
}
