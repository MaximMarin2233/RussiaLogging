import { getUser } from '@/lib/getUser'
import AccountClient from './AccountClient'

export default async function Page() {
  const user = await getUser()

  return <AccountClient user={user} />
}