"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { staycard1, staycard2, staycard3, staycard4 } from '@/common/assets/images';
function Stayahead() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const cards = [
        {
            image: staycard1,
            title: 'Live Alarm Feed',
        },
        {
            image: staycard2,
            title: 'Equipment Failure Detection',
        },
        {
            image: staycard3,
            title: 'Event History',
        },
        {
            image: staycard4,
            title: 'Good Operational Overview',
        },
    ];
    return (
        <div className="bg-[#005143] py-[48px] lg:py-[100px]">
            <div className='container'>
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="w-full font-extrabold lg:w-1/2 text-[20px] lg:text-[40px] text-white ff_telegraf">
                        Stay Ahead of Every Alert. Every Time.
                    </div>
                    <div className="w-full lg:w-1/2 text-white text-base">
                        Whether it’s a triggered sensor, failing device, or inactive zone — We provide the installer with instant visibility across all sites. It clearly shows when action is needed and who is responsible.
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[16px] lg:gap-[24px] sm:grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-16" data-aos="zoom-up">
                    {cards.map((card, index) => (
                        <div key={index} className="h-[200px] lg:h-[400px] rounded-3xl overflow-hidden relative" data-aos="fade-scale">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${card.image.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                            <div className="absolute inset-x-0 bottom-0 h-3/3"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(50, 122, 109, 0) 0.96%, #327A6D 98.08%)',
                                }}
                            ></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white z-10">
                                <h3 className="text-[15px] lg:text-2xl font-extrabold text-white ff_telegraf">{card.title}</h3>
                            </div>
                        </div>

                    ))}
                </div>


            </div>
        </div>
    )
}

export default Stayahead
