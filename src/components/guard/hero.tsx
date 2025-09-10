import React from 'react'
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'
import Button from '@/common/components/button';

function hero() {
    return (
        <div className='h-[445px] lg:h-[604px] lg:py-[200px] py-35 bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]'>
            <div className="container">
                <div className='max-w-[1078px] m-auto text-center'>
                    <Heading
                        text='Streamline Security Teams with Barricade'
                        variant='heading-lg'
                        headingClassName='!leading-[100%]'
                    />
                    <Text textClassName='mt-4 mb-4' text='What if the installer could streamline incident documentation and reporting, enhancing both accuracy and efficiency? Consider Barricade Guard to revolutionize operational efficiency and client service in the security sector.' />
                    <Button
                        text="Request Demo"
                        href="/book-demo"
                        buttonClassName="hover:bg-gray-100 transition hover:text-[#3CB097] w-fit m-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default hero
