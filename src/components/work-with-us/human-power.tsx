"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image';
import { humanFrame, framerMobile, peopletree } from '@/common/assets/images';

function HumanPower() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const humanData = [
        {
            id: 1,
            title: "Communication",
            description: "We prioritize timely updates to keep everyone updated."
        },
        {
            id: 2,
            title: "Adaptability",
            description: "We embrace change to meet evolving needs."
        },
        {
            id: 3,
            title: "Connection",
            description: "Meaningful work starts with real connection."
        },
        {
            id: 4,
            title: "Collaboration",
            description: "Despite distance, we foster teamwork and idea sharing."
        },
        {
            id: 5,
            title: "Accountability",
            description: "Each member ensures timely, quality work delivery."
        }
    ];

    return (
        <div className='bg-[#005143] py-[48px] lg:py-[100px]'>
            <div className="container">
                <div className='max-w-[950px] m-auto text-center'>
                    <Heading
                        text={'Human Powered'}
                        headingClassName="!text-white !leading-[100%] mt-4 !ff_telegraf"
                    />
                    <Text
                        textClassName="mt-3 !text-white !ff_telegraf"
                        variant="base"
                        text="We are building a community at Barricade that's human-powered, emphasizing both individual strengths and team collaboration. We prioritize empathy and teamwork, fostering a culture of innovation and success."
                    />
                </div>
                {/* Desktop / Large screens */}
                <div
                    className="flex w-full h-[132px] md:h-[570px] bg-cover bg-center justify-center items-center mt-8"
                    data-aos="fade-scale"
                    style={{
                        backgroundImage: `url(${peopletree.src})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '80%',
                        margin: '0 auto'
                    }}
                ></div>

                {/* Mobile screens */}
                {/* <div
                    className="flex sm:hidden w-full h-[360px] bg-cover bg-center justify-center items-center"
                    style={{
                        backgroundImage: `url(${framerMobile.src})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '100%'
                    }}
                ></div> */}

                <div className="hidden sm:grid grid-cols-2 sm:grid-cols-5 gap-y-6 sm:gap-x-0 mt-12 lg:mt-16">
                    {humanData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
        flex flex-col items-center justify-start text-center text-white
        ${index !== 0 ? "border-l border-[#CBCFDD]" : ""}
        ${index !== humanData.length - 1 ? "border-r border-[#CBCFDD]" : ""}
        lg:px-5 px-1
      `}
                            style={{ minHeight: "140px" }}
                        >
                            <h2 className="text-base lg:text-2xl font-extrabold ff_telegraf w-full min-h-[3rem] flex items-center justify-center">
                                {item.title}
                            </h2>
                            <p className="text-sm mt-2 lg:mt-3 w-full ">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default HumanPower