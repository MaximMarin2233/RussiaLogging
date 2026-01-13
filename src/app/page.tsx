import type { Metadata } from 'next'

import MainInf from '@/app/sections/MainInf/MainInf'
import DonationAnalytics from '@/app/sections/DonationAnalytics/DonationAnalytics'

export const metadata: Metadata = {
  title: "Russia Dashboard",
  description: "Project...",
}

export default function HomePage() {
  return (
    <div>
      <MainInf />
      <DonationAnalytics />
    </div>
  )
}
