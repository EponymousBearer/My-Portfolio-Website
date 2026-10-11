import Masthead from '@/components/Masthead'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Process from '@/components/Process'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import CurrentlySection from '@/components/CurrentlySection'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Experience />
        <TechStack />
        <CurrentlySection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
