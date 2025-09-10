"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'


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
        <div className='w-full header-gradient'>
            <div className="container">
                <div className="flex flex-col h-[515px] items-center justify-center w-full max-w-[900px] mx-auto">
                    <Heading
                        text='How Barricade Works'
                        variant='heading-lg'
                    />
                    <Text
                        text='An end-to-end security platform designed to unify hardware, software, and service. From installation to user control — everything works together, seamlessly.'
                        variant='lg'
                        textClassName='text-center'
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection
