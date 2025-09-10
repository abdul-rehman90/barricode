"use client";

import React, { useEffect } from 'react';
import { realtime1, realtime2, realtime3 } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import { Check } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import 'aos/dist/aos.css';
interface FeatureSection {
    badge: string;
    title: string;
    description: string;
    points: string[];
    image: StaticImageData;
    dropshadow?: string
}

interface RealtimeVisibilityProps {
    smheading?: string;
    mainHeading: string;
    subtext: string;
    featureSections?: FeatureSection[];
}
function RealtimeVisibility({ smheading = '', mainHeading = '', subtext = '', featureSections = [] }: RealtimeVisibilityProps) {
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
        <div className={`bg-[#005143] ${smheading ? 'py-10 md:py-25' : 'py-10 md:py-20'} `}>
            <div className="container">
                <div className="w-full max-w-[850px] mx-auto">
                    {smheading &&
                        <h3 className='text-xl text-center ff_telegraf text-[#3CB097] uppercase'>
                            See What Matters
                        </h3>
                    }
                    <Heading
                        variant='heading-sm'
                        headingClassName='mt-4 text-center'
                        text={mainHeading}
                    />
                    <Text
                        textClassName='text-center'
                        text={subtext}
                    />
                </div>
                <div className="mt-6 md:mt-16 flex flex-col gap-6 md:gap-[100px]">
                    {featureSections?.map((section, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6 md:gap-10 w-full items-center">
                            <div className={`col-span-1 md:col-span-2  ${index === 1 ? 'order-2' : ''} ${index === 0 || index === 2 ? 'order-2 md:order-1' : ''} `}>
                                <button className='text-[#3CB097] transition-all duration-300 hover:text-[#3CB097] hover:bg-white py-2 px-4 rounded-full border border-[#3CB097] cursor-pointer ff_telegraf'>
                                    {section.badge}
                                </button>
                                <h3 className='text-2xl sm:text-4xl ff_telegraf text-white font-extrabold mt-6'>
                                    {section.title}
                                </h3>
                                <Text
                                    variant='base'
                                    textClassName='text-white mt-6'
                                    text={section.description}
                                />
                                {section.points.map((point, idx) => (
                                    <div className='flex gap-2 items-center mt-6' key={idx}>
                                        <Check className='text-white' />
                                        <Text text={point} variant='base' />
                                    </div>
                                ))}
                            </div>
                            <div className={`col-span-1 flex justify-center items-center ${index === 1 ? 'order-1' : ''} ${index === 0 || index === 2 ? 'order-1 md:order-2' : ''}`} data-aos="fade-scale">
                                <Image className={`${section.dropshadow && section.dropshadow}`} src={section.image} alt='icon' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RealtimeVisibility