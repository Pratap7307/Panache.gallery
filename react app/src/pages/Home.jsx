import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '../sections/TeamSection'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Divider />
    </main>
  )
}
