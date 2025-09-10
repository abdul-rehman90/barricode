"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { backDashboardPopup } from '@/common/assets/images'


function BackofficeDashboard() {
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
            title: "Centralized Management:",
            description: "Manage guards, customers, and security assets effortlessly.",
        },
        {
            title: "Route & Task Assignment:",
            description: "Create patrol routes, checkpoints, and assign specific tasks.",
        },
        {
            title: "Activity Tracking:",
            description: "Track historical activity and monitor live operations in real-time.",
        },
        {
            title: "Reporting & Compliance: ",
            description: "Generate detailed reports and ensure regulatory compliance.",
        },
        {
            title: "Shift & Resource Planning: ",
            description: "Plan shifts and allocate resources with ease and precision.",
        },
    ];
    return (
        <div className='py-12 lg:py-[100px] bg-[#005143]'>
            <div className="container">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 justify-center text-center flex" data-aos="fade-scale">
                        <Image className='max-w-[436] lg:max-w-[576px] h-[300px] lg:h-[432px]' style={{ width: '100%' }} src={backDashboardPopup} alt="Back Office Dashboard Popup" />
                    </div>
                    <div className="max-w-[700px] mx-auto flex flex-col justify-center">
                        <span className='text-white text-xl font-normal ff_telegraf'>Backoffice Dashboard</span>
                        <h2 className="text-2xl lg:text-4xl text-white ff_telegraf font-extrabold mt-6">
                            Full Control and Overview from One Place
                        </h2>
                        <p className='mt-6 text-white text-base font-light'>The Guard module includes a powerful backoffice for comprehensive management and insights into their security operations.</p>
                        <div className="mt-6">
                            {features.map(({ title, description }, index) => (
                                <div key={index} className={`flex gap-3 ${index > 0 ? "mt-3" : ""}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.059 8.833 19 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <p className="text-white text-base ff_geret">
                                        <strong className="font-extrabold ff_telegraf">{title} </strong>
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BackofficeDashboard
