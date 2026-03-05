import type { Metadata } from 'next'

import Login from '@/app/login/sections/Login/Login'

export const metadata: Metadata = {
  title: "Russia Login",
  description: "Project...",
}

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}
