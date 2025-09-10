"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { backOfficeHeroImg } from '@/common/assets/images';
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
        <div className='bg-[linear-gradient(180deg,_#00261F_0%,_#00856E_100%)]  flex items-center justify-center pt-[120px] lg:!pt-[185px] '>
            <div className='container'>
                <div className='flex flex-col justify-end text-center gap-12 lg:gap-6'>
                    <div className='max-w-[697px] m-auto w-full mt-0 mb-0'>
                        <h2 className='text-[24px] lg:text-[40px] font-extrabold leading-none text-center text-white ff_telegraf'>
                            {`One command center for the installer's entire operation.`}
                        </h2>
                        <p className='text-base lg:text-lg font-light text-center text-white pt-4'>
                            From billing and analytics to alarms and customer support — everything happens in the Barricade Backoffice. A real-time dashboard built for control, insight, and simplicity.
                        </p>
                        <div className="flex justify-center gap-4 mt-6 flex-wrap">
                            <Button
                                text="Request a Demo"
                                href="/book-demo"
                                buttonClassName=""
                            />
                            <Button
                                text="Contact Us"
                                href="/contact-us"
                                buttonClassName="bg-transparent border border-white text-white hover:bg-white hover:text-[#3CB097] transition"
                            />
                        </div>
                    </div>

                    <Image className='flex justify-end' data-aos="fade-scale"
                        src={backOfficeHeroImg}
                        alt="Back Office Hero"
                    />
                </div>

            </div>
        </div>
    );
}

export default Hero;
