"use client";
import React, { useEffect } from 'react';
// import Button from '../ui/button';
import 'aos/dist/aos.css';
import Button from '@/common/components/button';

type LeftSectionType = {
    subtitle: string;
    heading: string;
    highlight: string;
    description: string;
    buttonText: string;
    extraText?: string;
};

type RightSectionType = {
    title: string;
    desc: string;
}[];

export type VisionsProps = {
    leftSection: LeftSectionType;
    rightSection: RightSectionType;
};

function Visions({ leftSection, rightSection }: VisionsProps) {
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
        <div className='bg-primary py-12 sm:py-25'>
            <div className="container">
                <div className="flex justify-between gap-12 flex-wrap lg:flex-nowrap">

                    {/* Left Section */}
                    <div className='max-w-[451px]'>
                        <p className='text-lg text-[#3CB097] font-400 ff_telegraf'>
                            {leftSection.subtitle}
                        </p>
                        <h2 className='text-2xl leading-7 font-extrabold sm:text-[40px] ff_telegraf sm:leading-11 mt-4 text-white'>
                            {leftSection.heading}{' '}
                            <span className='text-[#3CB097]'>{leftSection.highlight}</span>{' '}
                            <span className='text-white'>{leftSection.extraText}</span>
                        </h2>

                        <p className='text-base font-[300] text-white mt-4'>{leftSection.description}</p>
                        <Button
                            href='/backoffice'
                            buttonClassName='mt-4'
                            text="Discover The Platform" />
                    </div>

                    {/* Right Section */}
                    <div className='max-w-[500px] flex flex-col gap-6'>
                        {rightSection.map((item, index) => (
                            <div key={index}>
                                <h3 className='font-extrabold text-2xl ff_telegraf text-white'>{item.title}</h3>
                                <p className='font-[300] text-sm ff_geret text-white pb-6 border-b border-[#10957D]'>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Visions;
