import React from 'react'
import HeroSection from './hero-section'
import ComputerControl from './computer-control'
import SmarterAutomation from './smarter-automation'
import RealtimeVisibility from './realtime-visibility'
import SupportControl from './support-control'
import Connects from './connects'
import Integration from './integration'
import { automationData } from './AUTOMATION_CONSTS'
import { featureSections } from './REALTIME_CONSTS'
// import ScrollAnimatedWrapper from '@/animations/scroll-animation-wrapper'

function EndUserApp() {

    return (
        <div>
            <HeroSection />
            <ComputerControl key='computer' />
            <SmarterAutomation key='smarter'
                maindata={automationData.maindata}
                features={automationData.features} />
            <RealtimeVisibility key='visibility'
                smheading='SEE WHAT MATTERS'
                mainHeading={`Total visibility in <span class='text-[#3CB097]'>Real Time</span>`}
                subtext='With built-in video streaming and access control, the Barricade app always ensures the user who’s coming and going — and exactly what’s happening, wherever they are.'
                featureSections={featureSections}
            />
            <SupportControl key='support' />
            <Connects key='connects' />
            <Integration key='integration'
                heading='Want to Integrate with Barricade?'
                text='Help Us Build the Future of Hardware-Agnostic Security'
                buttontext='Integration partner'
            />
        </div>
    )
}

export default EndUserApp