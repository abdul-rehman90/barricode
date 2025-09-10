import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import React from 'react'
import ProgressCards from './progress-cards'

function Progress() {
    return (
        <div className='py-10 md:py-20 bg-[#005143]'>
            <div className="container">
                <div className="max-w-[850px] mx-auto">
                    <Heading
                        text={`How <span class='text-[#3CB097]'>Barricade</span> Works`}
                        variant='heading-sm'
                        headingClassName='text-center'
                    />
                    <Text
                        text="We've simplified the integration process — making it easy to connect the installer's to the Barricade ecosystem with developer-first tools and dedicated support."
                        variant='base'
                        textClassName='text-center'
                    />
                </div>
                <div className="mt-16">
                    <ProgressCards />
                </div>
            </div>
        </div>
    )
}

export default Progress
