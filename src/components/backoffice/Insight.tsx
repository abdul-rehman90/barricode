"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { backofficecard, InsightIcon, isightrightalt, } from '@/common/assets/images';
import Image from 'next/image';
import Heading from '@/common/components/heading';
import Text from '@/common/components/text';
function Insight() {
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
        <div className='Insightful_section relative'>
            <div className="px-6 md:ps-[40px] mx-auto max-w-[1360px]">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-8 md:py-16 px-0 lg:px-4 justify-between items-center '>
                    <div className="">
                        {/* Left Column */}
                        <div className="w-full max-w-[612px]">
                            <span className="text-base lg:text-xl font-normal text-[#327A6D] ff_telegraf uppercase">
                                Smarter Oversight. Smarter Access.
                            </span>
                            <h2 className="text-xl lg:text-[40px] font-extrabold ff_telegraf text-[#122D46] mt-2 lg:mt-4 leading-[100%]">
                                Insightful <span className="text-[#005143]">analytics</span> and user-level <span className="text-[#005143]">access control</span> — fully built in.
                            </h2>
                            <p className="text-base font-light text-[#122D46] mt-2 lg:mt-4">
                                Barricade Backoffice doesn’t just give you raw data — it turns your operations into clear, actionable insights.
                                From real-time event tracking to Power BI dashboards, you’ll know what’s happening, where, and who’s responsible.
                                Add role management to that, and your entire team stays secure and focused.
                            </p>

                            <div
                                data-aos='fade-scale'
                                className="bg-[#005143] rounded-[16px] p-6 mt-6">
                                <Image src={InsightIcon} alt="InsightIcon icon" />
                                <h2 className="ff_telegraf font-extrabold text-xl lg:text-2xl text-white mt-4">
                                    150+ Tracked Data Points
                                </h2>
                                <p className="font-light text-[13px] text-white mt-2">
                                    Get deep visibility across alarms, revenue, users, and device performance.
                                </p>
                            </div>
                        </div>
                        {/* Right Column */}
                    </div>
                    <Image className='' src={isightrightalt} alt="InsightRight image" />
                </div>
            </div>
            <div className='container'>
                <div className="flex flex-wrap gap-6 border-t border-[#CBCFDD] pt-9 pb-5">
                    <div className="w-full sm:w-[48%] lg:w-[32%] ">
                        <h2 className="text-xl lg:text-2xl font-extrabold text-[#122D46] ff_telegraf">Role Management</h2>
                        <p className="text-sm font-light text-[#122D46] mt-4">
                            Assign specific access levels for admins, technicians, or support staff — securely and easily.
                        </p>
                        <div className="relative rounded-2xl rounded-b-none bg-[linear-gradient(285.96deg,_rgba(18,149,125,0)_10.68%,_rgba(18,149,125,0.1)_100.04%)]">
                            <div
                                // data-aos="fade-in"
                                className='w-full p-6 h-[140px] rounded-2xl md:rounded-b-none border border-[#10957D] mt-6 md:border-b-0'
                            // style={{
                            //     backgroundImage: `url(${backofficecard.src})`,
                            //     backgroundSize: 'cover',
                            //     backgroundRepeat: 'no-repeat',
                            //     backgroundPosition: 'center -40px',

                            // }}
                            >
                                <Heading
                                    text='Change user Role'
                                    headingClassName='!text-[#122D46] pt-5 !text-lg !font-bold'
                                />
                                <Text
                                    text='You are about to change user role from a company. Are you sure you want to change the role'
                                    textClassName='!text-[#122D46]'
                                    variant='sm'
                                />

                            </div>
                            <div className='asolute h-full w-full rounded-2xl rounded-b-none top-0 left-0 '>
                            </div>
                        </div>
                    </div>
                    <span className='border-l border-[#CBCFDD] inline-block mx-[20px] my-0'></span>
                    <div className="w-full sm:w-[48%] lg:w-[32%] ">
                        <h2 className="text-xl lg:text-2xl font-extrabold text-[#122D46] ff_telegraf">Users & Locations</h2>
                        <p className="text-sm font-light text-[#122D46] mt-4">
                            View, manage, and filter users across multiple client sites and physical zones.
                        </p>
                        {/* <Image src={roleManagement} alt="Role Management image" className="mt-4" /> */}
                        <div
                            className='w-full relative h-[148px] rounded-2xl rounded-b-none border border-[#10957D] mt-6 border-b-0'
                            style={{
                                backgroundImage: `url(${backofficecard.src})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center -40px',

                            }}
                        >
                            <div className='asolute h-full w-full rounded-2xl rounded-b-none top-0 bg-[linear-gradient(285.96deg,_rgba(18,149,125,0)_10.68%,_rgba(18,149,125,0.1)_100.04%)]'>

                            </div>
                        </div>

                    </div>
                    <span className='border-l border-[#CBCFDD] inline-block mx-[20px] my-0'></span>
                    <div className="w-full sm:w-[48%] lg:w-[19%] flex flex-col justify-end">
                        <h2 className="text-2xl font-extrabold text-[#122D46] ff_telegraf">Power BI Integration</h2>
                        <h2 className="text-2xl font-extrabold text-[#122D46] ff_telegraf mt-6">Track Activities</h2>
                        <h2 className="text-2xl font-extrabold text-[#122D46] ff_telegraf mt-6">User Management</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Insight
