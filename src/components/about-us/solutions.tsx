"use client";

import React, { useEffect } from 'react';
import Heading from '@/common/components/heading';
import Image, { type StaticImageData } from 'next/image'
import 'aos/dist/aos.css';
interface solutionData {
    reverse: boolean;
    heading: string
    text: string
    image: StaticImageData
    headingbg?: string
    // textclassname:string
}
interface aboutprops {
    Data: solutionData[]
    className: string
    heading: string
    headingwidth: string
    textclassname: string
    vertical: string
}


function Solutions({ Data, heading, className, headingwidth, textclassname, vertical }: aboutprops) {
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
        <div className='py-6 sm:py-25'>
            <div className="container">
                {/* <h2 className='ff_telegraf text-[#122D46] font-extrabold text-[20px] leading-7 sm:text-[40px] max-w-[531px] mx-auto text-center sm:leading-11'>
                    From Field Frustration to a Fully Built <span className='text-primary'>Solution</span>
                </h2> */}
                <div className={`${headingwidth && headingwidth}`}>
                    <Heading
                        headingClassName='!text-[#122D46] text-center'
                        text={heading}
                    />
                </div>

                <div className={`mt-6 ${vertical}`}>
                    {Data.map((item: solutionData, index: number) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center ${item.headingbg ? 'gap-6' : 'gap-16'} ${item.reverse ? '' : ''
                                }`}
                        >
                            <div className={`${item.reverse ? 'order-2 hidden sm:block' : ''}`} data-aos="fade-scale">
                                <Image className='w-full object-cover rounded-3xl h-full max-h-[350px]' src={item.image} alt={`solution-${index}`} />
                            </div>
                            <div className={`${item.reverse ? 'order-1' : ''} ${item.headingbg}`} data-aos="zoom-up">
                                <h3 className={`${item.headingbg?.includes('#005143') && 'text-white'} ${className && className}`}>
                                    {item.heading}
                                </h3>
                                <p className={`${textclassname && textclassname} ff_geret mt-6`}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solutions
