"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Button from '@/common/components/button';
import Image from 'next/image';
import { workUsAboutUsBg } from '@/common/assets/images';
function OurPrivacy() {
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
        <div className='py-[48px] lg:py-[100px]'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <span className='text-[#005143] font-normal text-lg lg:text-xl uppercase ff_telegraf'>Total Control Over Client Accounts</span>
                        <h2 className='text-2xl lg:text-[32px] font-extrabold ff_telegraf text-[#122D46] mt-3 lg:mt-6'>“Your data is yours, forever!”</h2>
                    </div>
                    <div>
                        <p className='text-[#484A54] text-xl font-light'>Barricade is more than a provider; we are a partner in your security journey. Our commitment to excellence, combined with our deep understanding of the security landscape, makes us the trusted choice for clients seeking to navigate the complexities of today`s digital world. Together, we can achieve a secure, resilient future.</p>
                        <Button
                            buttonClassName='py-3 bg-[#005143] mt-6 w-fit'
                            href='/privacy-policy'
                            text='Privacy policy'
                        />
                    </div>
                </div>
                <div>
                    <div className="!h-[403px] !rounded-[12px] overflow-hidden w-full mt-6 lg:mt-16">
                        <Image
                            data-aos="fade-scale"
                            src={workUsAboutUsBg}
                            alt="..."
                            layout="intrinsic"
                            width={800}
                            className='!h-[inherit]'
                            style={{ width: "100%", objectFit: "fill", height: "inherit !important" }}
                        />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default OurPrivacy