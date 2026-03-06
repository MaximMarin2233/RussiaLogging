import { cookies } from 'next/headers'

export async function getUser() {

  const cookieStore = await cookies()
  const auth = cookieStore.get('auth')

  if (!auth) return null

  return JSON.parse(auth.value)
}