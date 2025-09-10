import { barricadelogo, mountainview } from '@/common/assets/images'
import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'
import React from 'react'

function Installersoftware() {
    return (
        <div className='px-4 md:p-[100px] max-w-[1440px] m-auto'>
            <div
                className='bg-no-repeat mt-12 md:mt-0 relative rounded-3xl bg-center bg-cover h-[156px] md:h-[600px] w-full'
                style={{
                    backgroundImage: `url(${mountainview.src})`
                }}
            >
                <div className='absolute  top-0 right-0 left-0 inset-0 bg-[#FFFFFF80]'>
                    <Image className='w-[200px] md:max-w-[500px] md:w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={barricadelogo} alt='icon' />
                </div>
                <div className="mx-auto hidden md:block max-w-[600px] pt-6 pe-6 bg-white rounded-tr-3xl absolute bottom-0 left">
                    <Text
                        textClassName='!text-[#3CB097] text-left mb-2'
                        text='April 7, 2025'
                        variant='sm'
                    />
                    <Heading
                        text='Installer-first software provider Barricade Systems launches globally this April'
                        variant='heading-xs'
                        headingClassName='!text-[#122D46]'
                    />
                    <Text
                        text="When Barricade Systems launches worldwide this April, it won’t be just another software platform entering the crowded security tech market. Instead, it will rep..."
                        textClassName='!text-[#122D46]'
                        variant='sm'
                    />
                    <Button
                        text='Read More'
                        buttonClassName='bg-[#005143] mt-4'
                    />
                </div>
            </div>
        </div>
    )
}

export default Installersoftware
