import Masthead from '@/components/Masthead'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import CurrentlySection from '@/components/CurrentlySection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <CurrentlySection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
