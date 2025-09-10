"use client";

import React from 'react';
import { beeIcon } from '@/common/assets/images'
import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'
interface integrationsprops {
    heading: string,
    text: string,
    buttontext: string,
    href?: string,
}
function Integration({ heading, text, buttontext, href }: integrationsprops) {
    return (
        <div className='py-10 md:py-25 bg-[rgb(16,149,125)] relative'>
            <Image className='absolute hidden md:block top-0 left-4 md:left-10 lg:left-20 opacity-50 z-1 md:opacity-100 h-[260px]' src={beeIcon} alt='icon' />
            <div className="container">
                <div className='mx-auto max-w-[654px]'>
                    <Heading
                        text={heading}
                        headingClassName="uppercase !text-white !z-10 text-center !leading-[100%]"
                    />
                    <Text
                        textClassName='text-center mt-3 z-20'
                        variant='base'
                        text={text}
                    />
                    <div className='flex justify-center'>
                        <Button
                            buttonClassName='py-3 z-20 bg-[#005143] mt-6'
                            text={buttontext}
                            href={href ? href : '/integration-partner'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integration