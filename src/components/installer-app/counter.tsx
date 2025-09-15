"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

function Counter() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const statsData = [
        { id: 1, value: "42%", label: "Less Time Per Install" },
        { id: 2, value: "63%", label: "Fewer Support Calls" },
        { id: 3, value: "35%", label: "More Customers per Installer" },
    ];
    return (
        <div className='bg-[#005143] py-[48px] lg:py-[100px]'>
            <div className='container'>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-y-6 sm:gap-x-10">
                    {statsData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`text-center text-white ${index === 1 ? "border-l border-r border-white" : ""
                                } lg:px-8 px-1`}
                        >
                            <h2 className="text-2xl lg:text-4xl font-extrabold ff_telegraf">{item.value}</h2>
                            <p className="text-xs lg:text-xl mt-2 lg:mt-4">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Counter
