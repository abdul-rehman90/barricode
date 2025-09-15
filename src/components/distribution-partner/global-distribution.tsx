"use client";

import React, { useEffect } from 'react';
import { globalMap } from '@/common/assets/images';
import Image from 'next/image';
import Heading from '@/common/components/heading';
import 'aos/dist/aos.css';

function GlobalDistribution() {
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
        <div className='py-12 lg:py-[100px]'>
            <div className='container'>
                <div className="flex flex-wrap md:flex-nowrap justify-between w-full gap-10">
                    <div
                        className='w-full max-w-[494px]'
                    >
                        <span className="text-lg lg:text-xl text-[#005143] font-normal">
                            Built for Distributors at Every Scale
                        </span>
                        <Heading
                            headingClassName='!text-[#122D46]'
                            text={`“Local or Global — If You <span class='text-[#005143]'>Distribute</span>, You Belong Here.”`}
                        />
                        <p className="font-light lg:text-xl text-base mt-4 text-[#484A54]">
                            {`Whether you're supplying hardware to regional installers or managing global logistics networks, Barricade empowers you to deliver more value — without changing how you operate.`}
                        </p>
                    </div>

                    <div className="space-y-6 w-full max-w-[600px]">
                        <div>
                            <h2 className="text-[#101828] ff_telegraf text-2xl font-extrabold">
                                Local Distributors
                            </h2>
                            <p className="font-light lg:text-xl text-base mt-4 text-[#484A54]">
                                Barricade empowers local distributors to offer complete, ready-to-sell solutions combining hardware, software, and service with no extra development.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[#101828] ff_telegraf text-2xl font-extrabold">
                                Global Distributors
                            </h2>
                            <p className="font-light lg:text-xl text-base mt-4 text-[#484A54]">
                                Global distributors can scale effortlessly with Barricade’s unified platform. Deliver software-enabled hardware across regions, support localized branding.
                            </p>
                        </div>
                    </div>
                </div>

                <div >
                    <Image
                        className='mt-6 lg:mt-16'
                        src={globalMap}
                        alt='globalMap'
                    />
                </div>
            </div>
        </div>
    );
}

export default GlobalDistribution;
