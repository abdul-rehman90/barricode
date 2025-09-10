"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

interface heroprops {
    herotext: string,
    heroheading: string,
    herosubheading: string
}
function Hero({ herotext, heroheading, herosubheading }: heroprops) {
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
        <div className='lg:mt-[40px] pb-[0px] lg:pb-[100px] pt-[140px]'>
            <div className='container'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <span className="text-lg lg:text-xl text-[#005143] font-normal uppercase">{heroheading}</span>
                        <h2 className="text-2xl lg:text-[40px] text-[#122D46] ff_telegraf font-extrabold mt-3">
                            {herosubheading}
                        </h2>
                    </div>
                    <div>
                        <p className='font-light text-base lg:text-lg text-[#122D46]'>
                            {herotext}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
