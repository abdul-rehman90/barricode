"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { guardMobilePopup } from '@/common/assets/images'

function GuardMobile() {
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
        {
            title: "NFC and barcode scanning:",
            description: "For verified presence and accurate checkpoint logging.",
        },
        {
            title: "Digital checklists & site instructions:",
            description: "Ensure all procedures are followed consistently.",
        },
        {
            title: "Easy task assignment & delegation:",
            description: "Streamline daily operations and incident response.",
        },
        {
            title: "Real-time incident reporting: ",
            description: "With photo/video documentation for comprehensive records.",
        },
        {
            title: "User-friendly interface: ",
            description: "Designed for intuitive, on-the-go operations.",
        },
    ];
    return (
        <div className='py-12 lg:py-[100px]'>
            <div className="container">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="max-w-[700px] mx-auto flex flex-col justify-center">
                        <span className='text-[#005143] text-xl font-normal ff_telegraf'>Guard Mobile</span>
                        <h2 className="text-2xl lg:text-4xl text-[#122D46] ff_telegraf font-extrabold mt-6">
                            {`Empower the Installer's Guards On-the-Go`}
                        </h2>
                        <p className='mt-6 text-[#101828] text-base font-light'>Give the guards the tools they need to operate professionally and efficiently — directly from their phone.</p>
                        <div className="mt-6">
                            {features.map(({ title, description }, index) => (
                                <div key={index} className={`flex gap-3 ${index > 0 ? "mt-3" : ""}`}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.059 8.833 19 7"
                                            stroke="#101828"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-[#101828] text-base ff_geret">
                                        <strong className="font-extrabold ff_telegraf">{title} </strong>
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 justify-center text-center flex" data-aos="fade-scale">
                        <Image style={{ width: '100%', height: 'auto', maxWidth: '271px' }} src={guardMobilePopup} alt="Guard Mobile Popup" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default GuardMobile
