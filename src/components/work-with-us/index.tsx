import React from 'react'
import Hero from "./hero"
import Collaboration from './collabration'
import WorkTogether from './work-together'
import HowAreYou from './how-are-you'
import HowAreWe from './how-are-we'
import OpenPosition from './open-position'
import HowWeHire from './how-we-hire'
import HumanPower from './human-power'
import Integration from '../end-user-app/integration'

function index() {
  return (
    <div>
      <Hero />
      <Collaboration />
      <WorkTogether />
      <HowAreWe />
      <HowAreYou />
      <HumanPower />
      <HowWeHire />
      <OpenPosition />
      <Integration
        heading="Ready to Join?"
        text=' Become a Barricade Integration Partner and unlock new markets, better user experiences, and more connected systems.'
        buttontext="Become an Integration Partner"
      />

    </div>
  )
}

export default index
