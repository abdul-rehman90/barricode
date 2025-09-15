"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '../../common/components/heading'
import Text from '../../common/components/text'
import Image from 'next/image'
import { clientAccountImg } from '@/common/assets/images';
import ClientsCards from '@/common/components/clients-cards';

function ClientAccounts() {
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
        <div className='py-[48px] md:py-[100px]'>
            <div className='container'>
                <div className='max-w-[850px] mx-auto text-center'>
                    <span className='text-[#005143] font-normal text-base md:text-xl uppercase'>Total Control Over Client Accounts</span>
                    <Heading headingClassName='!leading-[100%] mt-4' text="<span class='text-[#005143]'>One place</span><span class='text-[#122D46]'> for every customer, company, and subscription.</span>" />
                    <Text textClassName='!text-[#122D46] !text-base mt-4' text="Barricade’s built-in CRM helps you manage homes, assign service plans, and track device and user usage — all within the back office. No external tools, no added complexity." />
                </div>
                <Image className='mt-[24px] lg:mt-[64px] mb-[24px] lg:mb-[64px]' data-aos="fade-scale" src={clientAccountImg} alt='' />
                <ClientsCards />

            </div>
        </div>
    )
}

export default ClientAccounts
