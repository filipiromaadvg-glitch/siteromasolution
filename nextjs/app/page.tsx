import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Compare from '@/components/Compare'
import Company from '@/components/Company'
import Testimonials from '@/components/Testimonials'
import Demo from '@/components/Demo'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <WhatsAppFloat />
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <Features />
        <HowItWorks />
        <Compare />
        <Company />
        <Testimonials />
        <Demo />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
