"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { linkedinone, linkedintwo, linkedinthree, linkedinfour } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Image from 'next/image'
import Link from 'next/link';


function Linkedin() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const highlights = [
        {
            image: linkedinone,
            titledes: 'Why manage fire, intrusion, video, and access in four di...',
            titlemob: 'Why manage fire, intrusion, video...',
            linkLabel: 'LinkedIn page',
        },
        {
            image: linkedintwo,
            titledes: 'What if your alarm system knew when to remind you...',
            titlemob: 'What if your alarm system knew...',
            linkLabel: 'LinkedIn page',
        },
        {
            image: linkedinthree,
            titledes: 'White label is more than an app — it’s a way to show yo...',
            titlemob: 'White label is more than an...',
            linkLabel: 'LinkedIn page',
        },
        {
            image: linkedinfour,
            titledes: 'Meet Ajay Khari, our Executive Vice President, St...',
            titlemob: 'Meet Ajay Khari, our E...',
            linkLabel: 'LinkedIn page',
        },
    ]

    return (
        <div className='container'>
            <Heading
                text='LinkedIn Highlights'
                variant='heading-xs'
                headingClassName='!text-[#122D46]'
            />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 md:pb-0">
                {highlights.map((item, index) => (
                    <div data-aos="fade-scale" key={index}>
                        <Image className='w-full md:max-w-[292px]' src={item.image} alt='icon' />
                        <Heading
                            text={item.titledes}
                            variant='heading-sp'
                            headingClassName='!text-[#122D46] pt-4 pb-2 !leading-6 hidden md:block'
                        />
                        <Heading
                            text={item.titlemob}
                            variant='heading-sp'
                            headingClassName='!text-[#122D46] pt-4 pb-2 !leading-6 block md:hidden'
                        />
                        <div className="flex">
                            <span className='text-[#122D46] ff_geret text-[8px] md:text-sm'>
                                — from our official
                            </span>
                            <Link target='blank' href="https://www.linkedin.com/company/barricadesystems" className='text-[#005143] ps-2 font-extrabold ff_telegraf text-[8px] md:text-base'>
                                {item.linkLabel}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Linkedin
