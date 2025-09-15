"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image';
import { wePoster1, wePoster2, wePoster3, wePoster4, wePoster5, wePoster6, wePoster7, wePoster8 } from '@/common/assets/images';


function HowAreWe() {
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
        <div className='lg:py-[100px] py-[48px]'>
            <div className="container">
                <div className='max-w-[850px] m-auto text-center'>
                    <Heading headingClassName='mt-4 !text-[#122D46]'
                        variant='heading-sm'
                        text='Who are we?' />
                    <Text textClassName='mt-4 !text-base mb-6 lg:mb-[64px] !text-[#122D46] ' text='At Barricade, we`re not your typical security company. We go beyond traditional systems to deliver smart, user-friendly solutions that empower both professionals and end-users. Join a community of innovators shaping the future of security — and experience the Barricade difference.' />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:items-center">
                    <div className="hidden sm:grid gap-6">
                        <div data-aos="fade-scale">
                            <Image src={wePoster1} alt="We Poster 1" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div></div>
                            <div data-aos="fade-scale">
                                <Image src={wePoster2} alt="We Poster 2" />
                            </div>
                        </div>
                        <div data-aos="fade-scale">
                            <Image src={wePoster3} alt="We Poster 3" />
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                            <Image data-aos="fade-scale" src={wePoster4} alt="We Poster 4" />
                            <Image data-aos="fade-scale" src={wePoster5} alt="We Poster 5" />
                        </div>
                        <div>
                            <Image data-aos="fade-scale" src={wePoster6} alt="We Poster 6" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                            <Image data-aos="fade-scale" src={wePoster7} alt="We Poster 7" />
                            <Image data-aos="fade-scale" src={wePoster8} alt="We Poster 8" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HowAreWe
