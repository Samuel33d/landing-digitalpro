'use client'

import {
  Header,
  Hero,
  Problem,
  Services,
  Process,
  Testimonials,
  FAQ,
  ContactForm,
  Footer,
  WhatsAppButton,
  CustomCursor,
  ScrollReveal
} from '@/components'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
