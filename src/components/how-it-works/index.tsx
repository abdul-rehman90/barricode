import React from 'react'
import Herosection from './hero.'
import Securityindustry from './security-industry'
import Makesdifferent from './makes-different'
import Integration from '../end-user-app/integration'
import Progress from './progress'
import PathScrollAnimation from './line-animation'

function Howworks() {

    return (
        <div>
            <Herosection key="hero" />
            <Securityindustry key="security" />
            <Progress key="progress" />
            <Makesdifferent key="makes-diff" />
            {/* <PathScrollAnimation /> */}
            <Integration
                key="integration"
                heading="Ready to Experience Barricade"
                text="Get a personalized demo"
                buttontext="Book a Demo"
                href='/book-demo'
            />
        </div>
    )
}

export default Howworks
