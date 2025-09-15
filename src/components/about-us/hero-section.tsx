"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Button from '@/common/components/button';
function HeroSection() {
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
        <div className='w-full header-gradient'>
            <div className="container">
                <div className='flex flex-col py-25 header-gradient items-center justify-center gap-4 max-w-[900px] mx-auto h-[445px] md:h-[685px]'>
                    <h2 className='text-2xl mt-14 md:mt-0 md:text-[64px] ff_telegraf text-white font-extrabold text-center leading-normal md:leading-[80px]'>
                        Built by the Industry. <br /> For the Industry.
                    </h2>
                    <p className='text-center ff_geret text-base md:text-lg font-300 text-white'>
                        We started as security professionals facing real-world problems. Today,
                        we’re a team of engineers, designers, and business minds building
                        the software we always wished we had.
                    </p>
                    <Button
                        buttonClassName='mt-6'
                        text='Work With Us'
                        // data-aos="fade-scale"
                        href='/work-with-us'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection