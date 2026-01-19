import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Russia Account',
  description: 'Project...',
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
