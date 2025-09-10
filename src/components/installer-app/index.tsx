import React from 'react'
import Hero from './hero'
import Installer from './installer'
import Counter from './counter'
import SecurityInstallation from './security-installation'
import InstallerImpact from './installer-impact'
import AllConnects from './all-connects'
import Integration from '../end-user-app/integration'


export default function InstallerApp() {

  return (
    <>
      <Hero />
      <Installer key="installer" />
      <Counter key="counter" />
      <SecurityInstallation key="security-installation" />
      <InstallerImpact key="installer-impact" />
      <AllConnects key="all-connects" />
      <Integration
        key="integration"
        heading="Want to Integrate with Barricade?"
        text="Help Us Build the Future of Hardware-Agnostic Security"
        buttontext="Become an Integration Partner"
      />
    </>
  )
}
