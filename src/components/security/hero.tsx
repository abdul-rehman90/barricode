import React from 'react'
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'

function Hero() {
    return (
        <div className='h-[454px] md:h-[515px] lg:pt-[200px] pt-35 bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]'>
            <div className="container">
                <div className='max-w-[900px] m-auto text-center'>
                    <Heading headingClassName='lg:text-[64px] !leading-[100%]' text="Security at the Heart of Barricade" />
                    <Text
                        variant='base'
                        textClassName='mt-4 mb-4' text='In a world where digital landscapes are constantly evolving, Barricade stands as a beacon of security, safeguarding the integrity of data, systems, and communications for our clients worldwide. Our unwavering commitment to security is reflected in every layer of our software and hardware solutions, designed to protect against the most sophisticated threats.' />
                </div>
            </div>
        </div>
    )
}

export default Hero
