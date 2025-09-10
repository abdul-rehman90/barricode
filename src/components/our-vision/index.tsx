import React from 'react'
import Hero from './hero'
import OpenSecurity from './open-security'
import SecurityGrow from './security-grow'
import LookingAhead from './looking-ahead'
import BuildingTrust from './building-trust'
import DesignFuture from './design-future'
import Integration from '../end-user-app/integration'
import { features } from './constants'

export default function index() {
  return (
    <>
      <Hero />
      <OpenSecurity />
      <SecurityGrow />
      <LookingAhead />
      <BuildingTrust
        headingalignment='max-w-[695px] mx-auto text-center'
        cardclassName='text-center'
        heading={`We’re building more than softwareWe’re building <span class='text-[#3CB097]'>trust</span>`}
        // heading='naeem'
        features={features}
      />
      <DesignFuture />
      <Integration
        heading='Ready to Join?'
        text=' Become a Barricade Integration Partner and unlock new markets, better user experiences, and more connected systems.'
        buttontext='Become a Distribution Partner'
      />
    </>
  )
}
