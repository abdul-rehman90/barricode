"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { pressmockup, userone, userthree, usertwo } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image'
import Link from 'next/link'


function Systems() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);

    const mainArticle = {
        image: pressmockup,
        date: 'April 8, 2025',
        title: 'Barricade Systems to launch a tool to help tech installers',
        description:
            'Barricade Systems is set to launch globally this April, marking a significant shift in the security tech market by prioritising local and regional installers.',
    }

    const sideArticles = [
        {
            image: usertwo,
            date: 'April 8, 2025',
            title: 'We’re all set and ready at Intersec 2025!',
            descriptiondes: 'When Barricade Systems launches worldwide this April, it ',
            descriptionmob: 'When Barricade Systems...',
        },
        {
            image: userone,
            date: 'April 8, 2025',
            title: 'What an incredible week at Security Essen!',
            descriptiondes: 'When Barricade Systems launches worldwide this April, it ',
            descriptionmob: 'When Barricade Systems...',
        },
        {
            image: userthree,
            date: 'April 8, 2025',
            title: 'Introducing Sentinel Video Surveillance!',
            descriptiondes: "We're excited to announce our newest line of video comp...",
            descriptionmob: "We're excited to announce ...",
        },
    ]

    return (
        <div className='pb-12 md:py-25'>
            <div className="container">
                <div className="py-6 border-y border-[#D9DADF]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className=' w-full flex flex-col'>
                            <div className='flex-1' data-aos="fade-scale">
                                <Heading
                                    text='Featured In'
                                    variant='heading-xs'
                                    headingClassName='!text-[#122D46]'
                                />
                                <div className='relative mt-10 pb-4'>
                                    <Image width={608} height={400} data-aos="" src={mainArticle.image} alt='icon' />
                                    <div className='rounded-3xl rounded-t-none bg-gradient-to-b from-[rgba(0,0,0,0)] to-black absolute top-0 left-0 right-0 h-full w-full'></div>
                                    <div className='absolute bottom-6 px-4'>
                                        <Heading
                                            headingClassName='hidden md:block'
                                            text='Born from the field: Barricade Systems launches globally in April, delivering an installer-first, brand-agnostic security platform'
                                            variant='heading-sp'
                                        />
                                        <Text
                                            variant='sm'
                                            text='When Barricade Systems launches worldwide this April, it won’t be just another software platform entering the crowded security tech market. Instead, it will represent a shift in how the industry supports its backbone: the local and regional security installers and integrators who keep homes, businesses, and communities secure every day.'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit flex flex-col gap-8 border-[#D9DADF] border-s ps-6'>
                            {sideArticles.map((article, index) => (
                                <div key={index} className='flex gap-4 items-center'>
                                    <div className=''>
                                        <Image className='w-[190px] md:w-[150px] rounded-2xl order' src={article.image} alt='icon' />
                                    </div>
                                    <div>
                                        <Text
                                            text={article.date}
                                            textClassName='!text-[#005143]'
                                            variant='sm'
                                        />
                                        <Heading
                                            text={article.title}
                                            headingClassName='!text-[#122D46] !leading-5'
                                            variant='heading-sp'
                                        />
                                        <Text
                                            text={article.descriptiondes}
                                            textClassName='pt-1 !text-[#005143] hidden md:block'
                                            variant='sm'
                                        />
                                        <Text
                                            text={article.descriptionmob}
                                            textClassName='pt-1 !text-[#005143] block md:hidden'
                                            variant='sm'
                                        />
                                        <Link href='/linkedin.com/company/barricadesystems' className='font-extrabold text-[#005143] ff_telegraf'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Systems
