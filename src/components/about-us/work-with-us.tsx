"use client";

import React, { useEffect } from 'react';
import { workwith } from '@/common/assets/images'
import Button from '@/common/components/button';
import 'aos/dist/aos.css';
function WorkWithUs() {
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
        <div className='py-12 sm:py-25'
            style={{
                backgroundImage: `url(${workwith.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <h2 className='text-white text-center font-extrabold text-2xl sm:text-[40px] ff_telegraf '>
                        WORK WITH US
                    </h2>
                    <p className='text-white text-base ff_geret max-w-[600px] text-center'>
                        We’re growing — and we’re looking for partners, integrators, manufacturers, and curious minds to grow with us.
                    </p>
                    <Button
                        buttonClassName='mt-4 !bg-[#005143]'
                        text='Work With Us'
                        // bgcolor='bg-[#005143]'
                        // border='none'
                        href='/work-with-us'

                    />
                </div>

            </div>

        </div>
    )
}

export default WorkWithUs