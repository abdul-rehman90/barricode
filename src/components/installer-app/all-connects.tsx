"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Button from '@/common/components/button';

function AllConnects() {
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
            <div className='container'>
                <div className='max-w-[654px] m-auto text-center'>
                    <Heading headingClassName='!text-[#122D46] !leading-[100%]' text='Want to See<br> How It All <span class="!text-[#005143]">Connects?</span> ' />
                    <Text textClassName='!text-[#122D46] !text-base mt-4 mb-6' text='Explore how the Backoffice brings it all together — from installation to billing, support, and automation.' />
                    <Button buttonClassName='!bg-[#005143] !py-[12px] !px-[16px] m-auto' text='Discover the Backoffice' href='/backoffice' />
                </div>
            </div>
        </div>
    )
}

export default AllConnects
