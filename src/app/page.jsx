import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Bubble} from '@/components/Bubble'
import {AboutUs} from '@/components/AboutUs'
import {Events} from '@/components/Events'
import {Experts} from '@/components/Experts'
import {Partners} from '@/components/Partners'
import {Education} from '@/components/Education'
import {Contact} from '@/components/Contact'
import {Policy} from '@/components/Policy'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bubble />
        <AboutUs />
        <Partners/>
        <Events />
        <Policy/>
        <Education/>
        <Experts/>
        <Contact/>
      </main>
      <Footer />
    </>
  )
}
