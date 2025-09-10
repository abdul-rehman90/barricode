import React from 'react'
import Hero from './hero'
import IntegrationForm from './integration-form'

export default function index() {
  return (
    <>
      <Hero
        herotext="Join our growing ecosystem of integration partners and bring powerful, connected experiences to your customers. Whether you' re a hardware manufacturer or software platform, our APIs and support make integration simple — so we grow stronger, together."
        heroheading='Partner with Barricade'
        herosubheading="Become an Integration Partner"
      />
      <IntegrationForm />
    </>
  )
}
