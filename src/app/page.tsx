import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/CredibilityBar'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import SocialProof from '@/components/sections/SocialProof'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CredibilityBar />
        <Services />
        <About />
        <Portfolio />
        <SocialProof />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
