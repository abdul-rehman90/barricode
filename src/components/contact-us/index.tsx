import React from 'react'
import Hero from '../integration-partner-form/hero'
import Contact from './contact-us'
function Contactus() {
    return (
        <div className=''>
            <Hero
                heroheading='Contact Us'
                herosubheading='Get in Touch with the Barricade Team'
                herotext="Join our growing ecosystem of integration partners and bring powerful, connected experiences to your customers. Whether you' re a hardware manufacturer or software platform, our APIs and support make integration simple — so we grow stronger, together."
            />
            <Contact />
        </div>
    )
}

export default Contactus
