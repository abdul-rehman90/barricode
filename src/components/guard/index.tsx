import React from 'react'
import Hero from './hero'
import GuardMobile from './guard-mobile'
import ChooseGuard from './choose-guard'
import BackofficeDashboard from './backoffice-dashboard'
import AlarmInstallation from './alarm-installation'

function index() {
  return (
    <>
        <Hero />
        <GuardMobile />
        <BackofficeDashboard />
        <AlarmInstallation />
        <ChooseGuard />
    </>
  )
}

export default index
