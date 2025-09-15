import React from 'react'
import Hero from './hero'
import Installersoftware from './installer-software'
import Slider from './slider'
import Systems from './systems'
import Linkedin from './linkedin'
import Release from './release'
import Aboutbarricade from './about-barricade'
import { features } from './about-barrricade-consts'
import BuildingTrust from '../our-vision/building-trust'
import Cards from './cards'
import Download from './download'

function Press() {
    return (
        <div>
            <Hero />
            <Installersoftware />
            <Slider />
            <Systems />
            <Linkedin />
            <div className="hidden md:block">
                <Release />
            </div>
            <Aboutbarricade />
            <Cards />
            <Download />
        </div>
    )
}

export default Press
