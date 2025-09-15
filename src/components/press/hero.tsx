import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import React from 'react'

function Hero() {
    return (
        <div className='header-gradient flex items-center justify-center pt-24 md:pt-[185px] pb-24'>
            <div className="container">
                <div className="mx-auto max-w-[900px]">
                    <Text
                        textClassName='uppercase !text-[#3CB097] text-center mb-4'
                        text='Press & Media Hub'
                    />
                    <Heading
                        text='Stay Updated with Barricade'
                        variant='heading-lg'
                        headingClassName='text-center !leading-[100%]'
                    />
                    <Text
                        text='Explore our latest news, media features, and press resources. Everything you need to tell the Barricade story — in one place.'
                        textClassName='text-center'
                        variant='lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
