"use client";

import React, { useEffect } from 'react';
import { integrationupdown } from '@/common/assets/images'
import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'

function Callfirst() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    return (
        <div className='py-10 md:py-25 h-[680px] md:h-[1049px]'>
            <div className="container">
                <div className="flex flex-wrap md:flex-nowrap justify-end relative">
                    <div className='z-[-1]'>
                        <Image className='absolute left-0 top-[110%] md:top-72 lg:top-40 xl:top-32' src={integrationupdown} alt='image' />
                    </div>
                    <div className='w-full max-w-[700px]'>
                        <p className='ff_telegraf text-[#005143] text-xl uppercase'>Step-by-Step Partnership Process</p>
                        <Heading
                            headingClassName='mt-4 !text-[#122D46]'
                            text='From First Call to Full Integration — We’re With You All the Way'
                            variant='heading-sm'
                        />
                        <Text
                            variant='base'
                            textClassName='!text-[#122D46]'
                            text='We don’t just hand over the docs and walk away. Our process is collaborative, clear, and designed to get your technology integrated, tested, and in-market fast — with full support at every stage.'
                        />
                        <Button
                            buttonClassName='bg-[#005143] cursor-pointer py-3 mt-4'
                            text='Become an Integration Partner'
                            href='/integration-partner-form'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Callfirst
