import React from 'react'
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'

function Hero() {
    return (
        <div className='pt-[130px] pb-[60px] lg:pb-[100px] lg:pt-[185px] bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]'>
            <div className="container">
                <div className='text-center'>
                    <Heading headingClassName='lg:text-[64px] !leading-[100%]' text="FAQ" />
                    <Text textClassName='mt-4 mb-4' text='Have questions about Barricade?' />
                </div>
            </div>
        </div>
    )
}

export default Hero
