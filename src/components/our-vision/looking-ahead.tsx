"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { lookingAheadIm } from '@/common/assets/images';
import Image from 'next/image';

function LookingAhead() {
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
        <div className='py-12 lg:py-[100px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[612px_1fr] gap-12 py-16 px-0 lg:px-4 items-center '>
                    <div>
                        {/* Left Column */}
                        <div className="w-full max-w-[612px]">
                            <span className="text-base lg:text-xl font-normal text-[#327A6D] ff_telegraf uppercase">
                                Looking Ahead
                            </span>
                            <h2 className="text-xl lg:text-[40px] font-extrabold ff_telegraf text-[#122D46] mt-2 lg:mt-4 leading-[100%]">
                                We’re Not Just Adapting — We’re Leading the  <span className="text-[#005143]">Change</span>
                            </h2>
                            <p className="text-base font-light text-[#122D46] mt-2 lg:mt-4">
                                The security industry is evolving fast. What used to require multiple systems, tools, and platforms can now be done in one — seamlessly.
                                From intrusion and fire to access control, automation, and video surveillance, Barricade is redefining how security companies operate, scale, and serve their customers.
                            </p>

                            <div
                                data-aos='fade-scale'
                                className="bg-[#005143] rounded-[16px] p-6 mt-6">
                                {/* <Image width={24} height={24} src={InsightIcon} alt="InsightIcon icon" /> */}
                                <h2 className="ff_telegraf font-extrabold text-xl lg:text-2xl text-white mt-4">
                                    Words from our installers
                                </h2>
                                <p className="font-light text-[13px] text-white mt-2">
                                    Barricade makes our operations feel future- ready- with one platform built to stay ahead of the industry.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}

                    </div>
                    <div
                        // data-aos="fade-scale"
                        className="w-full flex justify-center lg:justify-end">
                        <Image className='max-w-[225px] lg:max-w-[346px] h-full' src={lookingAheadIm} alt="lookingAheadIm image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingAhead