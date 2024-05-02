import { CardHoverEffectDemo } from '@/components/cards'
import Footer from '@/components/footer'
import Lamp from '@/components/lamp'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import ShimmerButton from '@/components/shimmer-button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="px-2 sm:px-4">
          <Lamp />
        </div>
        <div className="flex justify-center my-5">
          <Link href={'mailto:bindashish343@gmail.com'}>
            <ShimmerButton>Contact Me 📬</ShimmerButton>
          </Link>
        </div>
        <div className="my-10">
          <h1 className="text-3xl underline underline-offset-8 decoration-green-400 rotate-2 text-center font-bold">
            Skills 🤔
          </h1>
          <CardHoverEffectDemo />
        </div>
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
