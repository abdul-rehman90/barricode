"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'


function Connects() {
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
        <div className='py-10 md:py-25'>
            <div className="container">
                <div className='mx-auto max-w-[654px]'>
                    <Heading
                        text={`Want to See <br>How It All <span class="text-[#005143]">Connects</span>`}
                        headingClassName="!text-[#122D46] text-center"
                    />
                    <Text
                        textClassName='text-center mt-3 !text-[#122D46]'
                        variant='base'
                        text='Explore how the Backoffice brings it all together — from installation to billing, support, and automation.'
                    />
                    <div className='flex justify-center'>
                        <Button
                            buttonClassName='py-3 bg-[#005143] mt-6'
                            text='How It Works'
                            href='/how-it-works'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connects