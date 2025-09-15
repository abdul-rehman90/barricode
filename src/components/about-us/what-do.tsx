"use client";

import React, { useEffect } from 'react';
import { whatdo } from '@/common/assets/images'
// import Button from '../ui/button'
import 'aos/dist/aos.css';
import Button from '@/common/components/button';
function WhatDo() {
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
        <div className="py-6 sm:py-25">
            <div className='container'>
                <div data-aos="fade-scale"
                    style={{
                        backgroundImage: `url(${whatdo.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        height: '100%'
                    }}
                    className="py-12 sm:py-25 rounded-3xl">
                    <div className='flex flex-col items-center justify-center max-w-[600px] mx-auto px-4 sm:px-0'>
                        <p className='text-white text-xl ff_telegra'>WHAT WE DO</p>
                        <h2 className='ff_telegraf text-[20px] sm:text-[40px] font-extrabold text-white text-center leading-8 sm:leading-11 mt-12'>
                            Simplifying security operations for installers, integrators, and distributors.
                        </h2>
                        <Button
                            buttonClassName='mt-12 px-6'
                            text='Our Vision'
                            href='/our-vision'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatDo