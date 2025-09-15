"use client";

import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { curve1, curve2, curve3, map2, mapsalt } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import arrowRight from '@/common/assets/images/arrow-right.svg' // Make sure this exists
import Image from 'next/image'
import Button from '@/common/components/button'
import MapLocation from '../distribution-partner/maps'

function Landingcards() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const timelineData = [
        { year: '2020', text: 'Built for internal use' },
        { year: '2021', text: 'First external partner onboard' },
        { year: '2023', text: 'Expansion across Europe' },
        { year: 'Today', text: 'Open to partners, manufacturers, and distributors globally' },
    ]

    return (
        <div
            className="bg-no-repeat bg-cover relative bg-center pt-10"
        // style={{ backgroundImage: `url(${mapsalt.src})`, }}
        >
            <div className="container">
                <div className='mx-auto -mt-10 h-[350px] md:h-[700px]'>
                    <MapLocation />
                </div>
            </div>
            {/* <div className='absolute hidden lg:block left-[50.5%] top-39'>
                <span className="relative flex items-center justify-center size-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327A6D40] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#327A6D]"></span>
                </span>
            </div>
            <div className='absolute hidden lg:block left-[49.2%] top-49'>
                <span className="relative flex items-center justify-center size-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327A6D40] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#327A6D]"></span>
                </span>
            </div>
            <div className='absolute hidden lg:block left-[47.8%] top-58'>
                <span className="relative flex  items-center justify-center size-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327A6D40] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#327A6D]"></span>
                </span>
            </div>
            <div className='absolute hidden lg:block left-[47.8%] top-61'>
                <span className="relative flex items-center justify-center size-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327A6D40] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#327A6D]"></span>
                </span>
            </div>
            <div className='absolute hidden lg:block left-[50.5%] top-56'>
                <span className="relative flex items-center justify-center size-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327A6D40] opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-[#327A6D]"></span>
                </span>
            </div> */}

            <div
                className="absolute top-[20%] left-1/2 -translate-x-1/2">
                <div className="">
                    <Heading
                        headingClassName='!text-[#122D46] text-center'
                        text={`Built with <span class='!text-[#005143]'>Installers</span>, for <span class='!text-[#005143]'>Installers</span>`}
                    />
                    <div className="flex justify-center items-center gap-2 lg:gap-4 mt-12 lg:mt-16">
                        {timelineData.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="border-[#005143] rounded lg:rounded-2xl border-2 w-full max-w-[68px] lg:max-w-[200px] h-[43px] lg:h-[150px]">
                                    <div className="rounded lg:rounded-2xl group hover:bg-[#005143] transition-all duration-500 p-4 lg:p-6 shadow-[0px_0px_20px_0px_#00000026] w-full lg:min-w-[200px] h-full translate-x-1 translate-y-1 lg:translate-x-4 lg:translate-y-4 bg-white flex flex-col gap-0 lg:gap-1 items-center justify-center">


                                        <h3 className="text-[#005143] ff_telegraf font-extrabold text-[10px] lg:text-[36px] group-hover:!text-white transition-all duration-500">
                                            {item.year}
                                        </h3>
                                        <Text
                                            text={item.text}
                                            textClassName="!text-[#005143] text-[4px] lg:text-sm text-center group-hover:!text-white transition-all duration-500"
                                        />
                                    </div>
                                </div>

                                {index !== timelineData.length - 1 && (
                                    <Image
                                        src={
                                            index === 0
                                                ? curve1
                                                : index === 1
                                                    ? curve2
                                                    : curve3
                                        }
                                        alt="Arrow"
                                        className="w-[17px] h-[23px] lg:w-[30px] lg:h-[40px] xl:w-[60px] lg:h-[70px]"
                                    />
                                )}

                            </React.Fragment>
                        ))}

                    </div>
                    <div className='flex justify-center mt-12 lg:mt-20'>
                        <Button
                            buttonClassName='py-3'
                            text='About Us'
                            href='/about-us'
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landingcards
