"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { securitymocup } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'


function Securityindustry() {
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
        <div className='py-12 md:py-25'>
            <div className="container">
                <div className='max-w-[850px] mx-auto'>
                    <Heading
                        headingClassName='text-center !text-[#122D46]'
                        text={`The <span class='text-[#005143]'>Security Industry</span> is Still Running on Friction`}
                        variant='heading-sm'
                    />
                    <Text
                        text='Today, most security operations are stitched together with disconnected systems: one for monitoring, one for billing, another for support. It creates inefficiency, extra costs, and poor end-user experiences.'
                        variant='base'
                        textClassName='!text-[#122D46]   text-center'
                    />
                </div>
                <div data-aos="fade-scale" className='w-[70%] max-w-[1029px] mx-auto mt-8 md:mt-16'>
                    <Image src={securitymocup} alt='icon' />
                </div>
            </div>
        </div>
    )
}

export default Securityindustry
