"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Heading from '@/common/components/heading'
import Text from '@/common/components/text'
import Button from '@/common/components/button';
import { timelineCheckmarkIcon, istallerImpact1, istallerImpact2, istallerImpact3 } from '@/common/assets/images';
function InstallerImpact() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        });
    }, []);
    const installerData = [
        {
            image: istallerImpact1,
            title: 'Built for Speed, Accuracy, and Ease',
            subtitle: 'Why Installers Love It',
            description:
                'OnSite is designed specifically for field installers — removing guesswork, reducing setup friction, and improving efficiency from day one. It turns complex workflows into smooth, repeatable steps.',
            features: [
                'Purpose-built for field installers with real-world workflows in mind',
                'Simplifies complex installations with clear, guided steps',
                'Reduces setup time through intuitive interface and smart defaults',
                'Minimizes errors with visual device status and live feedback',
            ],
        },
        {
            image: istallerImpact2,
            title: 'Data-Driven Impact Across 5,000+ Installations',
            subtitle: 'Proven Results That Matter',
            description:
                'Hard numbers from real-world usage show how OnSite improves installer output, cuts down on errors, and drives business efficiency — without sacrificing quality or reliability.',
            buttonText: 'Work with us',
            href: '/work-with-us'
        },
        {
            image: istallerImpact3,
            title: 'Installers & Guards, Working as One',
            subtitle: 'Unified with Barricade Guard',
            description: 'OnSite seamlessly integrates with Barricade Guard, enabling real-time coordination between the installation teams and on-site security personnel. From alarm responses to customer handoffs — it\'s all synced in one app.',

            buttonText: 'Explore Guard Features',
            href: '/guards'
        },
    ]
    return (
        <div className='bg-[#005143] py-[48px] lg:py-[100px]'>
            <div className='container'>
                <div className='max-w-[850px] m-auto text-center' >
                    <span className='font-normal ff_telegraf text-[#3CB097] text-base lg:text-xl uppercase'>Installer Experience & Impact</span>
                    <Heading headingClassName='mt-4'
                        variant='heading-sm'
                        text='Visibility That <span class="!text-[#3CB097]">Powers Precision</span>' />
                    <Text textClassName='mt-4 !text-base mb-6 lg:mb-[64px] ' text='Stay informed with live system updates and access insights — helping installers work faster, smarter, and with greater confidence' />
                </div>
                {installerData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row gap-5 items-center justify-between w-full ${index === 1 ? 'lg:flex-row-reverse' : ''
                            } ${index !== installerData.length - 1 ? 'mb-6 lg:mb-[100px]' : ''}`}
                    >
                        {/* Image */}
                        <div className={`flex-1 ${index == 1 ? 'max-w-[500px]' : 'w-full md:w-[50%]'}`} data-aos="fade-scale">
                            <Image src={item.image} alt="installer-image" />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-[50%]">
                            <span className="text-base uppercase lg:text-xl text-[#3CB097] font-normal ff_telegraf">
                                {item.subtitle}
                            </span>
                            <h2 className="text-2xl lg:text-[40px] ff_telegraf font-extrabold text-white mt-4">
                                {item.title}
                            </h2>
                            <p className="text-base font-light text-white mt-2">{item.description}</p>

                            <div className="mt-6">
                                {item.features ? (
                                    <div className="space-y-3">
                                        {item.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Image src={timelineCheckmarkIcon} alt="checkmark" />
                                                <p className="text-base font-light text-white">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <Button
                                        href={item.href}
                                        buttonClassName='!py-[12px] !px-[16px]' text={item.buttonText} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}





            </div>
        </div>
    )
}

export default InstallerImpact
