"use client";

import React, { useEffect } from 'react';
import Who1 from '@/common/assets/icons/who-1-icon'
import Who2 from '@/common/assets/icons/who-2-icon'
import Who3 from '@/common/assets/icons/who-3-icon'
import Who4 from '@/common/assets/icons/who-4-icon'
import Who5 from '@/common/assets/icons/who-5-icon'
import Who6 from '@/common/assets/icons/who-6-icon'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import 'aos/dist/aos.css';

function Whoarewe() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const data = [
        { heading: 'Intrusion panels and sensors', icon: <Who1 /> },
        { heading: 'Specialized detection or automation modules', icon: <Who2 /> },
        { heading: 'Fire alarm systems', icon: <Who3 /> },
        { heading: 'CCTV cameras and NVRs', icon: <Who4 /> },
        { heading: 'Communicators and transmission units', icon: <Who5 /> },
        { heading: 'Access control solutions', icon: <Who6 /> },
    ]

    return (
        <div className='pb-10 md:pb-25'>
            <div className="container">
                <div className='max-w-[850px] mx-auto'>
                    <Heading
                        text={`<span class='text-[#005143]'>Who</span> Are You`}
                        variant='heading-sm'
                        headingClassName='!text-[#122D46] text-center'
                    />
                    <Text
                        variant='base'
                        textClassName='!text-[#122D46] text-center'
                        text='You`re building the systems that protect people and property — and we want to work with you.We partner with providers of:'
                    />
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-scale">
                    {data.map((item, index) => (
                        <div key={index} className="rounded-2xl border border-[#D9DADF] hover:bg-[#005143] p-6 group flex items-center gap-6 transition-all duration-300">
                            <div className="p-3 w-fit bg-[#005143] group-hover:bg-white rounded-full transition-colors duration-300">
                                {React.cloneElement(item.icon, {
                                    pathClassName: 'text-white group-hover:fill-[#005143] transition-colors duration-300'
                                })}
                            </div>
                            <Heading
                                variant='heading-sp'
                                headingClassName='!text-[#122D46] group-hover:!text-white transition-colors duration-300'
                                text={item.heading}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Whoarewe