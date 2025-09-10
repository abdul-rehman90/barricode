"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { riskManagementPoster } from '@/common/assets/images';


function RiskManagement() {
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
        <div className="bg-[#005143] py-[48px] lg:py-[100px]">
            <div className="container">
                <div className="flex flex-col sm:flex-row items-center gap-[64px]">
                    {/* First div with max width */}
                    <div className="max-w-[773px] w-full">
                        <h2 className='text-xl lg:text-[40px] font-extrabold ff_telegraf text-white mt-3 lg:mt-6'>
                            Proactive Risk Management
                        </h2>
                        <p className='text-white text-base lg:text-2xl font-light mt-4 lg:mt-11'>
                            At Barricade, we believe in staying one step ahead. Our approach to security involves proactive risk management, leveraging cutting-edge technology and insights to anticipate potential vulnerabilities before they can be exploited. Our dedicated team of security professionals works tirelessly to monitor, update, and fortify our defenses, ensuring that our clients can operate with confidence and peace of mind.
                        </p>
                    </div>

                    {/* Second div fills remaining space */}
                    <div className="flex-1">
                        <Image
                            data-aos="fade-scale"
                            src={riskManagementPoster}
                            alt="Risk Management Poster"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RiskManagement
