"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Heading from '@/common/components/heading'
import { verifiedIcon } from '@/common/assets/images';
import Image from 'next/image';
import Link from "next/link";
import Button from '@/common/components/button';
function OpenPosition() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const jobs = [
        { title: "Senior iOS Developer", location: "Bergen, Norway", url: "" },
        { title: "Senior Java Developer (Backend)", location: "Lisbon, Portugal", url: "" },
        { title: "QA Engineer / Test Engineer", location: "Bucharest, Romania", url: "" },
        { title: "Project Manager", location: "Oslo, Norway", url: "" },
        { title: "Sales Manager", location: "Madrid, Spain", url: "" },
        { title: "Finance & Administration Manager", location: "Bergen, Norway", url: "" },

    ];
    return (
        <div className='py-12 lg:py-[100px] bg-[#F3F3F5]'>
            <div className="container">
                <div className='m-auto text-center'>
                    <Heading headingClassName='mt-4 !text-[#122D46]'
                        variant='heading-sm'
                        text='OPEN <span class="!text-[#005143]">POSITIONS</span>' />
                </div>
                {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-16">
                    {jobs.map((job, index) => (
                        <div
                            data-aos="fade-scale"
                            key={index}
                            className="rounded-xl p-4 lg:p-6 bg-white hover:shadow-lg transition duration-300"
                        >
                            <h2 className="text-base lg:text-2xl font-extrabold text-[#122D46] ff_telegraf">{job.title}</h2>
                            <p className="text-sm lg:text-base text-[#122D46] font-light mt-2">{job.location}</p>

                            <Link
                                href={job.url}
                                className="!block text-base lg:text-xl font-extrabold text-[#3CB097] ff_telegraf hover:underline mt-5 lg:mt-8"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div> */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-16">
                    {jobs.map((job, index) => (
                        <div
                            data-aos="fade-scale"
                            key={index}
                            className="rounded-xl p-4 lg:p-6 bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h2 className="text-base lg:text-2xl font-extrabold text-[#122D46] ff_telegraf">
                                    {job.title}
                                </h2>
                                <p className="text-sm lg:text-base text-[#122D46] font-light mt-2">
                                    {job.location}
                                </p>
                            </div>


                            {/* Always open email client */}
                            <Link
                                href="mailto:Sales@barricadesystems.com"
                                className="!block text-base lg:text-xl font-extrabold text-[#3CB097] ff_telegraf hover:underline mt-5 lg:mt-8"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-16'>
                    <p className='text-sm font-light text-[#122D46]'>We protect your data learn more about security</p>
                    <div className='flex items-center gap-4 justify-center mt-4'>
                        <div className='flex items-center gap-2'>
                            <Image src={verifiedIcon} alt="Verified Icon" width={16} height={16} />
                            <p className='text-sm font-light text-[#122D46] text-nowrap'>SOC2 Type 2 Certified</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={verifiedIcon} alt="Verified Icon" width={16} height={16} />
                            <p className='text-sm font-light text-[#122D46]'>HIPAA Compliant</p>
                        </div>
                    </div>
                    <Button
                        text="Explore The Team"
                        href="/about-us"
                        buttonClassName="hover:bg-gray-100 transition hover:text-[#3CB097] w-fit m-auto mt-5"
                    />
                </div>
            </div>
        </div>
    )
}

export default OpenPosition
