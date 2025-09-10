import React from 'react'
import HeroSection from './hero-section'
import Solutions from './solutions'
import WhatDo from './what-do'
import Executive from './executive'
import Visions from './visions'
import Softwares from './softwares'
import Moonmap from './moonmap'
import DirectosBoard from './directors-board'
import WorkWithUs from './work-with-us'
import { visionData } from "../our-vision/constants";
import { solutionData } from './about-consts'


function Aboutus() {
    const sections = [

    ]

    return (
        <div>
            <HeroSection />

            <Solutions
                key="solutions"
                headingwidth="max-w-[531px] mx-auto"
                heading={`From Field Frustration to a Fully Built <span class='text-[#005143]'>Solution</span>`}
                textclassname="text-base sm:text-xl"
                vertical="space-y-6 md:space-y-16"
                className="ff_telegraf text-[32px] font-extrabold text-[#122D46]"
                Data={solutionData}
            />
            <WhatDo key="what-do" />
            <Executive key="executive" />
            <Visions
                key="visions"
                leftSection={visionData.leftSection}
                rightSection={visionData.rightSection}
            />
            <Softwares key="softwares" />
            <Moonmap key="moonmap" />
            <DirectosBoard key="directors-board" />
            <WorkWithUs

                key="work-with-us" />
        </div>
    )
}

export default Aboutus