"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { brandIcon, mobileIcon, realtimeIcon, controlIcon, cameraframe } from '@/common/assets/images';
function SecurityInstallation() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const features = [
        { icon: brandIcon, text: 'Brand Agnostic' },
        { icon: mobileIcon, text: 'Mobile First' },
        { icon: realtimeIcon, text: 'Real-time Sync' },
        { icon: controlIcon, text: 'Remote Control' },
    ]
    return (
        <div className='py-[48px] lg:py-[100px]'>
            <div className='container'>
                <div className="grid gap-y-6 gap-x-6 sm:gap-x-[24px] lg:gap-x-[80px] lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <h2 className="text-2xl lg:text-[32px] font-extrabold ff_telegraf">
                            <span className='text-[#005143]'>Streamline </span> Every Security Installation
                        </h2>
                        <p className="mt-4 text-base lg:text-lg">
                            The OnSite App is designed specifically for installers to streamline the installation of security systems—no matter the brand. Create homes, add devices, configure settings, and hand over a fully functional system to the customer—all from the phone.
                        </p>
                        <div className="mt-6 bg-[#005143] p-4 lg:p-6 rounded-lg">
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                {features.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Image
                                            width={18}
                                            height={18}
                                            src={item.icon}
                                            alt={item.text}
                                        // className="object-scale-down"
                                        />
                                        <p className="text-sm lg:text-lg ff_telegraf font-extrabold text-white">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image src={cameraframe} alt="securityInstallationImg" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SecurityInstallation
