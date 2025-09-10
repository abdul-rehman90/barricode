"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Button from '@/common/components/button'
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Image from 'next/image';
import { hirePoster } from '@/common/assets/images';

function HowWeHire() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const steps = [
        {
            title: "Apply",
            description: "Candidates submit their applications online, sharing their qualifications and experiences.",
            icon: (
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7523 6.90942C13.402 7.31796 13.2013 7.84387 13.2013 8.39813V16.0913C13.2013 16.6456 13.402 17.1715 13.7523 17.58H12.2148C12.5652 17.1715 12.7658 16.6456 12.7658 16.0913V8.39813C12.7658 7.84387 12.5652 7.31796 12.2148 6.90942H13.7523Z" stroke="white" strokeWidth="1.52539" />
                </svg>
            )
        },
        {
            title: "Screening",
            description: "Our team carefully looks over each application to assess skills, experience, and fit with our values.",
            icon: (
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7015 6.89941C10.3512 7.30795 10.1506 7.83386 10.1506 8.38812V16.0813C10.1506 16.6356 10.3512 17.1615 10.7015 17.57H9.16406C9.51444 17.1615 9.71505 16.6356 9.71505 16.0813V8.38812C9.71505 7.83386 9.51444 7.30795 9.16406 6.89941H10.7015Z" stroke="white" strokeWidth="1.52539" />
                    <path d="M16.8031 6.89941C16.4527 7.30795 16.2521 7.83386 16.2521 8.38812V16.0813C16.2521 16.6356 16.4527 17.1615 16.8031 17.57H15.2656C15.616 17.1615 15.8166 16.6356 15.8166 16.0813V8.38812C15.8166 7.83386 15.616 7.30795 15.2656 6.89941H16.8031Z" stroke="white" strokeWidth="1.52539" />
                </svg>

            )
        },
        {
            title: "Interview",
            description: "Shortlisted candidates participate in technical assessments and discussions to evaluate their skills and suitability.",
            icon: (
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.65466 6.89941C7.30432 7.30795 7.10369 7.83386 7.10369 8.38812V16.0813C7.10369 16.6356 7.30432 17.1615 7.65466 17.57H6.11719C6.46753 17.1615 6.66816 16.6356 6.66816 16.0813V8.38812C6.66816 7.83386 6.46753 7.30795 6.11719 6.89941H7.65466Z" stroke="white" strokeWidth="1.52539" />
                    <path d="M13.7523 6.89941C13.402 7.30795 13.2013 7.83386 13.2013 8.38812V16.0813C13.2013 16.6356 13.402 17.1615 13.7523 17.57H12.2148C12.5652 17.1615 12.7658 16.6356 12.7658 16.0813V8.38812C12.7658 7.83386 12.5652 7.30795 12.2148 6.89941H13.7523Z" stroke="white" strokeWidth="1.52539" />
                    <path d="M19.85 6.89941C19.4996 7.30795 19.299 7.83386 19.299 8.38812V16.0813C19.299 16.6356 19.4996 17.1615 19.85 17.57H18.3125C18.6629 17.1615 18.8635 16.6356 18.8635 16.0813V8.38812C18.8635 7.83386 18.6629 7.30795 18.3125 6.89941H19.85Z" stroke="white" strokeWidth="1.52539" />
                </svg>

            )
        },
        {
            title: "You get hired",
            description: "Successful candidates receive job offers and go through onboarding to get to know their new team.",
            icon: (
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3281 6.89941H13.9166C13.5163 7.47211 13.3886 8.21442 13.6145 8.91342L16.1099 16.636C16.225 16.9925 16.425 17.3123 16.6894 17.57H15.1009C15.5012 16.9973 15.6289 16.255 15.403 15.556L12.9076 7.83347C12.7924 7.47703 12.5925 7.15714 12.3281 6.89941Z" stroke="white" strokeWidth="1.52539" />
                    <path d="M19.7362 6.89941C19.4719 7.15714 19.2719 7.47703 19.1567 7.83347L16.6613 15.556C16.4355 16.255 16.5632 16.9973 16.9635 17.57H15.375C15.6393 17.3123 15.8393 16.9925 15.9545 16.636L18.4499 8.91342C18.6757 8.21442 18.5481 7.47211 18.1478 6.89941H19.7362Z" stroke="white" strokeWidth="1.52539" />
                    <path d="M7.65466 6.89941C7.30432 7.30795 7.10369 7.83386 7.10369 8.38812V16.0813C7.10369 16.6356 7.30432 17.1615 7.65466 17.57H6.11719C6.46753 17.1615 6.66816 16.6356 6.66816 16.0813V8.38812C6.66816 7.83386 6.46753 7.30795 6.11719 6.89941H7.65466Z" stroke="white" strokeWidth="1.52539" />
                </svg>

            )
        }
    ];

    return (
        <div className='py-[48px] lg:py-[100px]'>
            <div className="container">
                <div className="flex flex-col sm:flex-row gap-12 items-end">
                    {/* Left Column */}
                    <div className="flex-1">
                        <span className="text-[#005143] font-normal lg:text-xl text-base uppercase ff_telegraf">
                            How We Hire
                        </span>

                        <Heading
                            text={'A Transparent, Human-Centered Process'}
                            headingClassName="!text-[#122D46] !leading-[100%] mt-4"
                        />
                        <Text
                            textClassName="mt-3 !text-[#122D46]"
                            variant="base"
                            text="We` re cultivating a network of communities at Barricade, bringing together individuals from various backgrounds, including newcomers eager to contribute to our mission. We deeply appreciate and honor each person who invests their time in advancing the goals of Barricade."
                        />

                        <div className="mt-4">
                            <Button
                                buttonClassName="py-3 bg-[#005143] mt-4 w-fit"
                                text="Contact Us"
                                href='/contact-us'
                            />
                            <Image
                                data-aos="fade-scale"
                                src={hirePoster}
                                alt="How We Hire"
                                className="mt-12"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="border border-[#D9DADF] rounded-xl p-8"
                                >
                                    <div className="flex items-center gap-4 ml-[-45px]">
                                        <div className="rounded-sm bg-[#005143]">
                                            {step.icon}
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-[#122D46] ff_telegraf">
                                            {step.title}
                                        </h2>
                                    </div>
                                    <p className="text-base font-light text-[#122D46] mt-3">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowWeHire;
