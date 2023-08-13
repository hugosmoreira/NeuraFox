"use client"

import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Hero2 from "./components/Hero2/Hero2"
import Content from "./components/Content/Content"
import How from "./components/Howitworks/How"
import Pricing from "./components/Pricing/Pricing"
import CTA from "./components/CTA/CTA"
import Features from "./components/Features/Features"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"



export default function Home() {
  return (
    <div>
      <Hero2 />
      <Content />
      <How />
      <CTA />
      <Pricing />
     
      
      <FAQ />
      <Footer />
    </div>
  )
}
