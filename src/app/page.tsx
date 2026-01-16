import type { Metadata } from 'next'

import MainInf from '@/app/sections/MainInf/MainInf'
import DonationAnalytics from '@/app/sections/DonationAnalytics/DonationAnalytics'
import Products from '@/app/sections/Products/Products'
import Categories from '@/app/sections/Categories/Categories'
import Dynamics from '@/app/sections/Dynamics/Dynamics'

export const metadata: Metadata = {
  title: "Russia Dashboard",
  description: "Project...",
}

export default function HomePage() {
  return (
    <div>
      <MainInf />
      <DonationAnalytics />
      <Products />
      <Categories />
      <Dynamics />
    </div>
  )
}
