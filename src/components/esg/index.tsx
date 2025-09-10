import React from 'react'
import Herosection from './hero-section'
import Customers from './text-section'
import BuildingTrust from '../our-vision/building-trust'
import { features, solutionData } from './esg-consts'
import Solutions from '../about-us/solutions'
import Integration from '../end-user-app/integration'

function ESG() {
    return (
        <div>
            <Herosection />
            <Customers />
            <BuildingTrust
                headingalignment='max-w-[695px]'
                heading={`Built on <span class='text-[#3CB097]'>Principles</span> That Go Beyond Security`}
                cardclassName='text-start'
                features={features}
            />
            <Solutions
                heading={`<span class='text-[#005143]'>Security</span> for the world — without compromising the world.`}
                headingwidth='max-w-[850px] mx-auto'
                Data={solutionData}
                vertical='space-y-6'
                textclassname='text-sm sm:text-base'
                className='text-2xl text-[#122D46] ff_telegraf font-extrabold'
            />
            <Integration
                heading='Ready to Join?'
                text="We’re on a mission to build a more secure, sustainable, and equitable world. At Barricade, sustainability is a journey — and we' re committed to ethical governance, social responsibility, and continuous innovation. Join us as we work toward a safer future for people and the planet."
                buttontext='Learn More About Careers'
                href="/work-with-us"
            />
        </div>
    )
}

export default ESG
