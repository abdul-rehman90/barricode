"use client";

import React, { useEffect } from 'react';
import { executive } from '@/common/assets/images'
import Image from 'next/image'
import 'aos/dist/aos.css';

function Executive() {
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
        <div className='py-12 sm:py-25'>
            <div className="container">
                <div className="flex gap-4 sm:gap-16 items-start sm:items-center">
                    <Image
                        className='h-[76px] md:w-[250px] md:h-[250px]'
                        src={executive} alt='' />
                    <div>
                        <h2 className='ff_telegraf text-[#122D46] font-extrabold text-sm sm:text-2xl block sm:hidden'>
                            “At its core, Barricade is about connection — between people, systems, and businesses. This is security, made personal.”
                        </h2>
                        <h2 className='ff_telegraf text-sm sm:text-2xl hidden sm:block'>
                            “At its core, Barricade is about connection — between people, systems, and businesses.
                            We built it not just to solve technical problems, but to strengthen the relationships
                            between installers and their clients, teams and their tools. This is security, made
                            personal.”
                        </h2>
                        <h3 className='ff_telegraf font-extrabold text-sm sm:text-xl mt-3 sm:mt-12'>
                            Ajay Khari
                        </h3>
                        <p className='ff_geret text-xs sm:text-xl text-[#3E4958] mt-2'>
                            Executive VP, Strategy and Partnerships
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Executive