"use client";

import React, { useEffect } from 'react';
import { integrationPartner } from '@/common/assets/images';
import Heading from '@/common/components/heading';
import Text from '@/common/components/text';
import 'aos/dist/aos.css';
function Hero() {
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
        <div
            className="relative h-[393px] md:h-[488px] py-12 md:py-25 bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${integrationPartner.src})` }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 38, 31, 0.75) 0%, rgba(0, 133, 110, 0.75) 100%)',
                }}
            />
            <div className="relative z-10 container !max-w-[1050px] mx-auto text-center">
                <Heading
                    variant='heading-lg'
                    headingClassName="text-center !leading-[100%]"
                    text="Become a Barricade Distribution Partner" />
                <Text textClassName='text-base !lg:text-lg mt-4 font-light text-center'
                    text="Sell smarter — with software-enabled hardware, and full branding flexibility for your installer base."
                />
            </div>
        </div>

    );
}

export default Hero;
