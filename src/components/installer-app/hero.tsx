"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Text from '../../../src/common/components/text'
import Heading from '@/common/components/heading'
import Image from 'next/image';
import { appInstallerHero, installermocup } from '@/common/assets/images';
import Button from '@/common/components/button';
function Hero() {
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
        <div className='lg:pt-[200px] pt-40 bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)] flex items-end'>
            <div className='container'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 self-end">
                    <div className="mb-7 lg:mb-24">
                        <Heading headingClassName='lg:text-[64px] !leading-[100%]' text="OnSite App Smarter, Faster Installs" />
                        <Text text='Empower installer teams with a plug-and-play app that simplifies every installation—from setup to customer handoff.' />
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <Button
                                text="Request a Demo"
                                href="/book-demo"
                                buttonClassName="bg-[#3CB097] text-[#3CB097] hover:bg-gray-100 transition hover:text-[#3CB097]"
                            />
                            <Button
                                text="Contact Us"
                                href="/contact-us"
                                buttonClassName="bg-transparent border border-[#3CB097] !text-[#3CB097] hover:bg-white hover:text-[#3CB097] transition"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Image data-aos="fade-scale" src={installermocup} alt="appInstallerHero img" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
