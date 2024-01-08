import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeCard from '@/components/HomeCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex'>
      <HomeCard heading="Online orders" text="231"/>
      <HomeCard heading="Amount received" text="23,92,312.19"/>
    </div>
  )
}
