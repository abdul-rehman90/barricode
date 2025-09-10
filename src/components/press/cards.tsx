"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import { features } from './about-barrricade-consts'
import Link from 'next/link'
function Cards() {
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
        <div className='py-12 lg:py-25'>
            <div className="container">
                <div className={``}>
                    <div>
                        <Heading
                            headingClassName='!text-[#122D46] text-center'
                            text={`Key Contacts for Press`}
                        />
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mt-16">
                    {features.map((item, index: number) => (
                        <div
                            data-aos="fade-scale"
                            key={index}
                            className={`group flex flex-col h-auto justify-between rounded-2xl p-[10px] lg:p-6 border border-[#D9DADF] bg-transparent hover:bg-[#005143] transition-all duration-300 ease-in-out gap-0 `}
                        >
                            <div>
                                <h2 className={`text-xl lg:text-2xl font-extrabold ff_telegraf text-[#122D46] transition-all duration-300 ease-in-out group-hover:text-white`}>
                                    {item.title}
                                </h2>
                                <p className="text-sm font-light text-[#122D46]mt-4 transition-all duration-300 ease-in-out group-hover:text-white">
                                    {item.description}
                                </p>
                                <Link className='font-extrabold pt-4 group-hover:text-white text-[#005143] transition-all duration-300 ease-in-out text-base ff_telegraf' href='#'>
                                    {item.url}
                                </Link>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
