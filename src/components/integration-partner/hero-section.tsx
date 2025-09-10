"use client";

import React, { useEffect } from 'react';
import { integrationheroalt } from '@/common/assets/images'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import 'aos/dist/aos.css';

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
        <div className='pt-28 pb-16 lg:pb-[120px] lg:pt-[165px]'
            style={{
                backgroundImage: `url(${integrationheroalt.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
            }}
        >
            <div className="container">
                <div className="max-w-[900px] mx-auto">
                    <Heading
                        text='Connect Your Technology to the Barricade Ecosystem'
                        headingClassName='text-center !leading-[100%]'
                        variant='heading-lg'
                    />
                    <Text
                        variant='lg'
                        textClassName='text-center mt-4'
                        text='We collaborate with manufacturers and solution providers to integrate intrusion systems,
                         access control, automation, and more — giving installers and end-users a seamless experience 
                         through a single platform.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection
