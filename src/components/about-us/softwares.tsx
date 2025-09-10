"use client";

import React, { useEffect } from 'react';
import Image from 'next/image'
import { solution1 } from '@/common/assets/images';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading';
interface SoftwareProps {
    icon?: string;
    card_icon?: string;
}
function Sofwares({ icon, }: SoftwareProps) {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const cardData = [
        {
            card_icon: solution1,
            title: "Software Engineers",
            description:
                "We believe great technology doesn’t have to be complicated. We build powerful, scalable tools — but keep them intuitive and human-first.",
        },
        {
            card_icon: '',
            title: "Business Developers",
            description:
                "We understand how security businesses grow. That’s why we’ve designed Barricade to unlock recurring revenue, streamline workflows, and strengthen client relationships.",
        },
        {
            card_icon: '',
            title: "Designers",
            description:
                "We obsess over every tap, toggle, and screen. Because we know that great design doesn’t just look good — it makes your work feel easier.",
        },
        {
            card_icon: '',
            title: "Security Professionals",
            description:
                "We’ve spent years in the field — wiring systems, responding to alarms, and managing frustrated customers. That’s why we know what works (and what definitely doesn’t).",
        },
    ];

    return (
        <div className='py-6 sm:py-25 bg-white'>
            <div className="container">
                <Heading
                    variant='heading-sm'
                    headingClassName='!text-[#122D46]'
                    text={`We're <span class='!text-[#005143]'>not just</span> software developers. <br/> Wer'e:`}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 sm:mt-16" data-aos="fade-scale">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className='rounded-3xl group hover:bg-[#005143] duration-400 border border-[#005143] p-6'
                        >
                            {icon && <Image src={item.card_icon} alt='' />}
                            <h3 className='font-extrabold text-2xl text-[#122D46] group-hover:text-white ff_telegraf'>
                                {item.title}
                            </h3>
                            <p className='text-sm ff_geret mt-4 group-hover:text-white'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sofwares