"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { pressmockup, systemavatar } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'
import Link from 'next/link';


function Release() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    // Dynamic data
    const pressReleases = [
        {
            title: 'Q2 Product Updates Now Live',
            description: 'All users can now access smart automation, CRM sync, and maintenance mode.',
        },
        // {
        //     title: 'Barricade Raises Series A',
        //     description: 'Secures €10M to fuel European growth and partner integrations.',
        // },
        // {
        //     title: 'Q2 Product Updates Now Live',
        //     description: 'All users can now access smart automation, CRM sync, and maintenance mode.',
        // },
        // {
        //     title: 'Barricade Raises Series A',
        //     description: 'Secures €10M to fuel European growth and partner integrations.',
        // }
    ]

    const featured = {
        image: systemavatar,
        title: 'Born from the field: Barricade Systems launches globally in April, delivering an in...',
        description: 'When Barricade Systems launches worldwide this April, it...'
    }

    return (
        <div className='py-12 md:py-25'>
            <div className="container">
                <div className='flex justify-between gap-6 md:gap-16'>



                    {/* <div className='flex-1' data-aos="fade-scale">
                        <Heading
                            text='Featured In'
                            variant='heading-xs'
                            headingClassName='!text-[#122D46]'
                        />
                        <div className='relative mt-10 pb-4'>
                            <Image src={featured.image} alt='featured image' />
                            <div className='rounded-3xl rounded-t-none bg-gradient-to-b from-[rgba(0,0,0,0)] to-black absolute top-0 left-0 right-0 h-full w-full'></div>
                            <div className='absolute bottom-6'>
                                <Heading
                                    text={featured.title}
                                    variant='heading-sp'
                                />
                                <Text
                                    variant='sm'
                                    text={featured.description}
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className=' w-full flex flex-col flex-1 '>
                        <Image width={608} height={400} data-aos="" src={systemavatar} alt='icon' />

                    </div>
                    <div className='w-full max-w-[600px]'>
                        <div className='pb-6 border-b'>
                            <Text
                                text='April 8, 2025'
                                textClassName='pt-4 !text-[#005143]'
                                variant='sm'
                            />
                            <Heading
                                text='Barricade Systems to launch a tool to help tech installers'
                                headingClassName='!text-[#122D46]'
                                variant='heading-sp'
                            />
                            <Text
                                text='Barricade Systems is set to launch globally this April, marking a significant shift in the security tech market by prioritising local and regional installers.'
                                textClassName='pt-1 !text-[#005143]'
                                variant='sm'
                            />
                            <Link href='linkedin.com/company/barricadesystems' className='font-extrabold text-[#005143] ff_telegraf'>
                                Read More
                            </Link>
                        </div>
                        <Heading
                            text='Press Releases'
                            variant='heading-xs'
                            headingClassName='!text-[#122D46] mt-6'
                        />
                        {pressReleases.map((item, index) => (
                            <div
                                key={index}
                                className='border-b border-[#D9DADF] mt-4 pb-6'
                            >
                                <h3 className='font-extrabold text-base ff_telegraf !text-[#005143]'>
                                    {item.title}
                                </h3>
                                <Text
                                    text={item.description}
                                    textClassName='!text-[#122D46]'
                                    variant='sm'
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Release
