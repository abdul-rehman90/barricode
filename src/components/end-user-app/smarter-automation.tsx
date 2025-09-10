"use client";

import React, { useEffect } from 'react';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import { UsersIcon } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import 'aos/dist/aos.css';

interface MainItem {
    heading: string
    text: string
    subheading: string
    subtext: string
    images: StaticImageData
}

interface Feature {
    title: string
    description: string
}

interface AutomationProps {
    features?: Feature[]
    maindata?: MainItem[],
    alignment?: string,
}

function SmarterAutomation({ features, maindata = [], alignment = '' }: AutomationProps) {
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
        <div className='py-10 md:py-25'>
            <div className="container">
                {maindata.map((items, index) => (
                    <div key={index} className={`flex flex-wrap md:flex-nowrap justify-between gap-6 mb-10 md:mb-16  w-full  ${alignment ? alignment : 'items-end'}`}>
                        <div className="w-full h-full max-w-[612px]">
                            <Heading
                                text={items.heading}
                                headingClassName="!text-[#122D46]"
                            />
                            <Text
                                textClassName='!text-[#122D46]'
                                variant='base'
                                text={items.text}
                            />
                            <div
                                data-aos='fade-scale'
                                className='p-6 bg-[#005143] rounded-2xl mt-6'>
                                <UsersIcon className='text-white h-6 w-6' />
                                <Heading
                                    text={items.subheading}
                                    headingClassName='mt-4 !text-2xl'
                                />
                                <Text
                                    textClassName=''
                                    text={items.subtext}
                                    variant='sm'
                                />
                            </div>
                        </div>
                        <div
                            data-aos='fade-scale'
                            className='pb-6 md:pb-0 h-full flex justify-end grow'>
                            <Image className='h-auto max-h-[477px] max-w-full object-contain' height={477} width={551} src={items.images} alt='icon' />
                        </div>
                    </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#CBCFDD] lg:grid-cols-3 pt-4 md:pt-16 gap-6">
                    {features?.map((feature, index) => (
                        <div
                            key={index}
                            className={`w-full pr-6 ${index !== features.length - 1 ? 'pb-4 border-b md:border-b-0 md:border-r border-[#CBCFDD]' : ''
                                }`}
                        >
                            <Heading
                                text={feature.title}
                                variant="heading-xs"
                                headingClassName="!text-[#0D2138]"
                            />
                            <Text
                                text={feature.description}
                                textClassName="!text-[#0D2138] mt-4"
                                variant="sm"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SmarterAutomation
