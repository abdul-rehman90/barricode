"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Button from '@/common/components/button'
import Image from 'next/image'
import { enduserhero, mobileimage } from '@/common/assets/images'

function Herosection() {
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
        <div className='header-gradient relative'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-end">
                    <div className='w-full max-w-[650px] py-10 md:py-25 mt-24 md:mt-20'>
                        <h2 className='leading-8 sm:leading-18 ff_telegraf font-extrabold text-white text-2xl sm:text-[64px]'>
                            Everything. <br />
                            Controlled By The
                            Installer

                        </h2>
                        <p className='text-base sm:text-lg ff_geret text-white mt-4'>
                            The Barricade mobile app puts users in full control of their home or business — from arming alarms and viewing CCTV to managing access, devices, and smart automation routines. Designed for simplicity, security, and instant communication.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Button
                                buttonClassName='bg-[#3CB097] py-3'
                                text='Request a Demo'
                                href='/book-demo'
                            />
                            <Button
                                buttonClassName='bg-transparent py-3 border border-[#3CB097] text-[#3CB097]'
                                text='Contact Us'
                                href='/contact-us'
                            />
                        </div>
                    </div>
                    <div className=''>
                        <Image src={enduserhero} data-aos="fade-scale" alt='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection