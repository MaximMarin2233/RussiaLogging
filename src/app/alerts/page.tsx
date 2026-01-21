import type { Metadata } from 'next'

import Alerts from '@/app/alerts/sections/Alerts/Alerts'

export const metadata: Metadata = {
  title: "Russia Alerts",
  description: "Project...",
}

export default function AlertsPage() {
  return (
    <div>
      <Alerts />
    </div>
  )
}
