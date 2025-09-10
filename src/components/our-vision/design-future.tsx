"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Image from 'next/image';
import { fourone, fourtwo, fourthree, fourrfour, future1, future2, future3, future4, smallFuture1, smallFuture2 } from '@/common/assets/images';

function DesignFuture() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const largeScreenImages = [fourone, fourtwo, fourthree, fourrfour];
    const smallScreenImages = [fourone, fourtwo];

    return (
        <div className='py-12 lg:py-[100px]'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="max-w-[531px] w-full">
                        <h2 className="text-2xl lg:text-[40px] text-[#122D46] ff_telegraf font-extrabold mt-3">
                            Born from the Field. Designed for the <span className='text-[#005143]'>Future</span>.
                        </h2>
                    </div>
                    <div className='"w-ful'>
                        <p className="font-light text-base text-[#122D46]">
                            Barricade was born out of frustration with outdated tools and disconnected systems. We set out to build the platform we always wished existed — one that connects everything in one place, with no compromise on flexibility, usability, or branding.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]" >
                    {smallScreenImages.map((imageSrc, index) => (
                        <div data-aos="fade-scale" key={`small-${index}`} className="lg:hidden rounded-xl mt-6 sm:mt-10">
                            <Image
                                src={imageSrc}
                                alt={`Small Future ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                    {largeScreenImages.map((imageSrc, index) => (
                        <div data-aos="fade-scale" key={`large-${index}`} className="hidden lg:block rounded-xl mt-6 lg:mt-16">
                            <Image
                                src={imageSrc}
                                alt={`Future ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default DesignFuture