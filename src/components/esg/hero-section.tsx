import { esghero } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import React from 'react'

function Herosection() {
    return (
        <div className='flex justify-center items-center h-[604px] relative'
            style={{
                backgroundImage: `url(${esghero.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className='absolute z-1 top-0 left-0 right-0 h-full w-full inset-0 bg-[linear-gradient(180deg,rgba(0,38,31,0.5)_0%,rgba(0,133,110,0.5)_100%)]'>
            </div>
            <div className="container z-2">
                <div className='flex flex-col gap-4 max-w-[900px] mx-auto mt-16'>
                    <Text
                        text='Our sustainability commitment'
                        textClassName='uppercase !text-[#3CB097] text-center'
                        variant='xl'
                    />
                    <Heading
                        text='Our Approach to Sustainability'
                        variant='heading-lg'
                        headingClassName='text-center !leading-[100%]'
                    />
                    <Text
                        text='At Barricade, sustainability isn’t just a checkbox — it’s a core principle that informs how we design, build, and operate. From smart software to efficient hardware, we’re committed to reducing our environmental footprint while empowering the security industry to do the same. Through innovation, responsibility, and collaboration, we’re building a safer and more sustainable future.'
                        textClassName='!text-white text-center'
                        variant='lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection
