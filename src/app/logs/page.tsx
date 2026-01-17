import type { Metadata } from 'next'

import Logs from '@/app/logs/sections/Logs/Logs'

export const metadata: Metadata = {
  title: "Russia Logs",
  description: "Project...",
}

export default function LogsPage() {
  return (
    <div>
      <Logs />
    </div>
  )
}
