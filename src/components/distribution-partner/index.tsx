import React from 'react'
import Hero from './hero'
import GlobalDistribution from './global-distribution'
import HowWork from './how-work'
import GetStarted from './get-started'
import Integration from '../end-user-app/integration'

export default function Distributionpartner() {

    return (
        <>
            <Hero />
            <GlobalDistribution key="global-distribution" />
            <HowWork key="how-work" />
            <GetStarted key="get-started" />
            <Integration
                key="integration"
                heading="Ready to Join?"
                text=" Become a Barricade Integration Partner and unlock new markets, better user experiences, and more connected systems."
                buttontext="Become a Distribution Partner"
                href="/integration-partner-form"
            />
        </>
    )
}
