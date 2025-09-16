"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { groupmobilesm, mobilegroup } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'


function SupportControl() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const data = [
        {
            heading: "Full CRM Sync",
            text: 'Everything users see is connected to what your installer sees — from profiles and devices to alarm history and subscription plans.',
        },
        {
            heading: "Role-Based User Access",
            text: 'Assign access by person, role, or location — ensuring the right level of control for admins, family members, or employees.',
        },
    ];
    const data2 = [
        {
            heading: "Service Requests",
            text: 'Submit service issues directly through the app and start a real-time conversation with the installer — no calls or emails needed.',
        },
        {
            heading: "Maintenance Mode",
            text: 'Temporarily hand over control to the installer for troubleshooting or maintenance — without triggering alerts or losing visibility.',
        },
    ]
    return (
        <div className='py-10 md:py-25'>
            <div className="container">
                <div className="max-w-[850px] mx-auto">
                    <Heading
                        // text={`Complete <span class="text-[#005143]">Control</span> Anywhere.`}
                        text={`<span class="!text-[#005143]">Users Need</span> `}
                        headingClassName="!text-[#122D46] text-center"
                    />
                    <Text
                        variant='base'
                        textClassName='!text-[#122D46] text-center mt-3'
                        text='The Barricade app isn’t just for managing alarms — it keeps users connected to their installer, syncs seamlessly with the back office, and ensures every user has the right access at the right time.'
                    />
                </div>
                <div className='flex gap-4 md:gap-16 items-center justify-center mt-8 md:mt-16'>
                    <div className='flex flex-col gap-6 md:gap-[100px] justify-between h-full'>
                        {data.map((item, index) => (
                            <div className='max-w-[350px] h-full' key={index}>
                                <Heading
                                    variant='heading-xs'
                                    headingClassName='!text-[#005143] text-right'
                                    // text='Full CRM Sync'
                                    text={item.heading}
                                />
                                <Text
                                    variant='sm'
                                    textClassName='!text-[#122D46] text-right mt-3 hidden md:block'
                                    // text='Everything users see is connected to what your installer sees — from profiles and devices to alarm history and subscription plans.'
                                    text={item.text}
                                />
                            </div>
                        ))}
                    </div>
                    <Image className='hidden md:block' height={638} width={504} src={mobilegroup} alt='' />
                    <Image className='block md:hidden max-w-[10s1px]' src={mobilegroup} alt='' />
                    <div className='flex flex-col gap-6 md:gap-[100px] justify-between h-full'>
                        {data2.map((item, index) => (
                            <div className='max-w-[350px] h-full' key={index}>
                                <Heading
                                    variant='heading-xs'
                                    headingClassName='!text-[#005143] text-left'
                                    // text='Full CRM Sync'
                                    text={item.heading}
                                />
                                <Text
                                    variant='sm'
                                    textClassName='!text-[#122D46] text-left mt-3 hidden md:block'
                                    // text='Everything users see is connected to what your installer sees — from profiles and devices to alarm history and subscription plans.'
                                    text={item.text}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportControl